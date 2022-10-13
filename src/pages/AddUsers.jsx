import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addBooks, loadBooks } from "../redux/actions/bookActions";
import moment from "moment/moment";
import { addUsers, loadUniversity } from "../redux/actions/userActions";

const booksSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  book: Yup.string().required("Required"),
  borrow_date: Yup.date().required("Required"),
  return_date: Yup.date(),
  status: Yup.string().required("Required"),
});

const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    school: "",
    book: "",
    borrow_date: "",
    return_date: "",
    status: "",
  });
  // let universities = [1, 2, 3];
  // let books = [1, 2, 3];
  const universities = useSelector((state) => state.users.data);
  // console.log(universities);
  const books = useSelector((state) => state.books.data);
  useEffect(() => {
    dispatch(loadUniversity());
    dispatch(loadBooks());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    const formattedDate = moment(date).format("MM/DD/yyyy");
    setForm({ ...form, [e.target.name]: formattedDate });
    console.log(form);
  };

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 border border-primary rounded-3 p-24">
        <Formik
          initialValues={form}
          enableReinitialize={true}
          validationSchema={booksSchema}
          onSubmit={() => {
            dispatch(addUsers(form));
            alert("add successfully!");
            setForm({
              name: "",
              school: "",
              book: "",
              borrow_date: "",
              return_date: "",
              status: "",
            });
          }}
        >
          <Form className="d-flex flex-wrap flex-column">
            <label className="form-label text-capitalize" htmlFor="name">
              name
            </label>
            <Field
              name="name"
              type="text"
              value={form.name || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
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
                  <option key={university} value={university}>
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
              className="mb-10 form-select"
            >
              <option value="">Select a book</option>
              <option value="HUCE">HUCE</option>
              {books ? (
                books.map((book) => (
                  <option key={book.id} value={book.title}>
                    {book.title}
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
              borrow day
            </label>
            <input
              type="date"
              name="borrow_date"
              // value={form.borrow_date || ""}
              onChange={handleDateChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="borrow_date"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="return_date">
              return day
            </label>
            <input
              type="date"
              name="return_date"
              // value={form.return_date || ""}
              onChange={handleDateChange}
              className="mb-10 form-control"
            />
            <label className="form-label text-capitalize" htmlFor="status">
              status
            </label>
            <Field
              name="status"
              as="select"
              value={form.status || ""}
              onChange={handleChange}
              className="mb-10 form-select"
            >
              <option value="">Select book's status</option>
              <option value="new">New</option>
              <option value="old">Old</option>
              <option value="damaged">Damaged</option>
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

export default AddUsers;
