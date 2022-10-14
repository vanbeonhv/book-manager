import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { loadBooks } from "../redux/actions/bookActions";
import moment from "moment/moment";
import {
  addUsers,
  editUsers,
  loadEditUsers,
  loadUniversities,
} from "../redux/actions/userActions";

const booksSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  book: Yup.string().required("Required"),
  borrow_date: Yup.date().required("Required"),
  return_date: Yup.date(),
  status: Yup.string().required("Required"),
});

const EditUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    school: "",
    book: "",
    borrow_date: "",
    return_date: "",
    status: "",
  });

  useEffect(() => {
    dispatch(
      loadEditUsers(id, (res) => {
        setForm(res.data);
      })
    );
  }, []);
  const books = useSelector((state) => state.books.data);
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    dispatch(
      loadUniversities((res) => {
        setUniversities(res.data);
      })
    );
    dispatch(loadBooks());
  }, []);
  // console.log(books);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form);
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    const formattedDate = moment(date).format("MM/DD/yyyy");
    setForm({ ...form, [e.target.name]: formattedDate });
    // console.log(form);
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
            dispatch(editUsers(id, form));
            alert("edit successfully!");
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
              type="text"
              value={form.book || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            ></Field>
            <ErrorMessage
              name="book"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="borrow_date">
              borrow day
            </label>
            {/* <input
              type="date"
              name="borrow_date"
              // value={form.borrow_date || ""}
              onChange={handleDateChange}
              className="mb-10 form-control"
            /> */}
            <Field
              name="borrow_date"
              type="text"
              value={form.borrow_date || ""}
              onChange={handleChange}
              className="mb-10 form-control"
              placeholder="mm/dd/yyyy"
            ></Field>
            <ErrorMessage
              name="borrow_date"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="return_date">
              return day
            </label>
            {/* <input
              type="date"
              name="return_date"
              // value={form.return_date || ""}
              onChange={handleDateChange}
              className="mb-10 form-control"
            /> */}
            <Field
              name="return_date"
              type="text"
              value={form.return_date || ""}
              onChange={handleChange}
              className="mb-10 form-control"
              placeholder="mm/dd/yyyy"
            ></Field>
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

export default EditUsers;
