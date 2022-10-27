import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import moment from "moment/moment";
import axios from "axios";
import { Slide, toast } from "react-toastify";

const returnSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  book: Yup.string().required("Required"),
  borrow_date: Yup.date().required("Required"),
  return_date: Yup.date(),
  status: Yup.string().required("Required"),
});

const returnSuccess = () =>
  toast.success("Return successfully!", {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 1000,
    theme: "colored",
    transition: Slide,
  });

const ReturnBorrow = () => {
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
    return_date: today,
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://library-db-marc.herokuapp.com/api/borrow/" + id)
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
      return_date: today,
    });
    console.log(form);
  };

  const handleSubmit = async () => {
    try {
      const returnUrl = "http://library-db-marc.herokuapp.com/api/borrow/" + id;
      await axios.put(returnUrl, form);
      returnSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row mt-48">
      <div className="col-3"></div>
      <div className="col-6 border border-primary rounded-3 p-24">
        <Formik
          initialValues={form}
          enableReinitialize={true}
          validationSchema={returnSchema}
          onSubmit={async () => {
            console.log("test 2");
          }}
        >
          <Form className="d-flex flex-wrap flex-column">
            <label className="form-label text-capitalize" htmlFor="studentName">
              student name
            </label>
            <Field
              name="studentName"
              type="text"
              value={form.studentName || ""}
              className="mb-10 form-control"
              disabled
            />
            <ErrorMessage
              name="studentName"
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
              <button
                type="submit"
                className="btn btn-primary text-white"
                onClick={handleSubmit}
              >
                Return
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default ReturnBorrow;
