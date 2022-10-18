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
} from "../redux/actions/borrowActions";
import axios from "axios";

const booksSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  book: Yup.string().required("Required"),
  borrow_date: Yup.date().required("Required"),
  return_date: Yup.date(),
  status: Yup.string().required("Required"),
});

const EditBorrow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const todayFormatted = moment(today).format("MM/DD/yyyy");
  const [form, setForm] = useState({
    studentName: "",
    school: "",
    book: "",
    borrow_date: "",
    return_date: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://localhost:3001/api/borrow/" + id)
        .catch((err) => {
          throw err;
        });
      const borrowInfo = response.data;
      setForm(borrowInfo);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      return_date: todayFormatted,
    });
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
            dispatch(editUsers(id, form));
            alert("edit successfully!");
          }}
        >
          <Form className="d-flex flex-wrap flex-column">
            <label className="form-label text-capitalize" htmlFor="name">
              student name
            </label>
            <Field
              name="name"
              type="text"
              value={form.studentName || ""}
              className="mb-10 form-control"
              disabled
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
              type="text"
              value={form.school || ""}
              className="mb-10 form-select"
              disabled
            />
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
              className="mb-10 form-control"
              disabled
            />
            <ErrorMessage
              name="book"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="borrow_date">
              borrow date
            </label>
            <Field
              name="borrow_date"
              type="text"
              value={form.borrow_date || ""}
              className="mb-10 form-control"
              placeholder="mm/dd/yyyy"
              disabled
            />
            <ErrorMessage
              name="borrow_date"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="return_date">
              return date
            </label>
            <Field
              name="return_date"
              type="text"
              value={form.return_date || ""}
              className="mb-10 form-control"
              disabled
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

export default EditBorrow;
