import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import moment from "moment/moment";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { toast, Zoom } from "react-toastify";

const booksSchema = Yup.object().shape({
  studentName: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  book: Yup.string().required("Required"),
  borrow_date: Yup.date().required("Required"),
  return_date: Yup.date(),
  status: Yup.string().required("Required"),
});
const today = new Date().toISOString().slice(0, 10);
const todayFormatted = moment(today).format("MM/DD/yyyy");

const AddBorrow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentName: "",
    school: "",
    book: "",
    borrow_date: todayFormatted,
    return_date: "",
    status: "borrowing",
  });
  // const books = useSelector((state) => state.books.data);
  const [students, setStudents] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userURL = "http://localhost:3001/api/students";
      const universityURL = "http://localhost:3001/api/university";
      const bookURL = "http://localhost:3001/api/books";

      const responses = await Promise.all([
        axios.get(userURL),
        axios.get(universityURL),
        axios.get(bookURL),
      ]).catch((err) => {
        throw err;
      });
      const userData = await responses[0].data;
      const universityData = await responses[1].data;
      const bookData = await responses[2].data;

      const studentsList = userData.map((student) => student.name);
      setStudents(studentsList);
      setUniversities(universityData);
      const booksList = bookData.map((book) => book.title);
      setBooks(booksList);
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, borrow_date: today, [e.target.name]: e.target.value });
    console.log(form);
  };
  const addSuccess = () =>
    toast.success("Add successfully!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 1000,
      theme: "colored",
      transition: Zoom,
    });

  const addFail = () =>
    toast.error("Add fail!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 1000,
      theme: "colored",
      transition: Zoom,
    });
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 border border-primary rounded-3 p-24">
        <Formik
          initialValues={form}
          enableReinitialize={true}
          validationSchema={booksSchema}
          onSubmit={async () => {
            try {
              const addUrl = "http://localhost:3001/api/borrow";
              await axios.post(addUrl, form);
              addSuccess();
              setForm({
                studentName: "",
                school: "",
                book: "",
                borrow_date: todayFormatted,
                return_date: "",
                status: "borrowing",
              });
            } catch (error) {
              console.log(error);
              addFail();
            }
          }}
        >
          <Form className="d-flex flex-wrap flex-column">
            <label className="form-label text-capitalize" htmlFor="studentName">
              student name
            </label>
            <Field
              name="studentName"
              as="select"
              value={form.studentName || ""}
              onChange={handleChange}
              className="mb-10 form-select"
            >
              <option value="">Select students</option>
              {students ? (
                students.map((student) => (
                  <option key={uuidv4()} value={student}>
                    {student}
                  </option>
                ))
              ) : (
                <option>Data empty</option>
              )}
            </Field>
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="school">
              school
            </label>
            <Field
              name="school"
              as="select"
              value={form.school || ""}
              onChange={handleChange}
              className="mb-10 form-select"
            >
              <option value="">Select an University</option>
              {universities ? (
                universities.map((university) => (
                  <option key={uuidv4()} value={university}>
                    {university}
                  </option>
                ))
              ) : (
                <option>Data empty</option>
              )}
            </Field>
            <ErrorMessage
              name="school"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="class">
              book
            </label>
            <Field
              name="book"
              as="select"
              value={form.book || ""}
              onChange={handleChange}
              className="mb-10 form-select overflow-hidden"
            >
              <option value="">Select a book</option>
              {books ? (
                books.map((book) => (
                  <option key={uuidv4()} value={book}>
                    {book}
                  </option>
                ))
              ) : (
                <option>Data empty</option>
              )}
            </Field>
            <ErrorMessage
              name="book"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="borrow_date">
              borrow date
            </label>
            <Field
              type="text"
              name="borrow_date"
              value={form.borrow_date || ""}
              className="mb-10 form-control"
              disabled
            />
            <ErrorMessage
              name="borrow_date"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="status">
              status
            </label>
            <Field
              name="status"
              as="select"
              value={form.status || ""}
              className="mb-10 form-select"
              disabled
            >
              <option value="borrowing">Borrowing</option>
            </Field>
            <ErrorMessage
              name="status"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary text-white">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default AddBorrow;
