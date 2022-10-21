import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const booksSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  phone_number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  city: Yup.string().required("Required"),
});
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
const AddStudents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    school: "",
    email: "",
    publicYear: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <div className="row mt-48">
      <div className="col-3"></div>
      <div className="col-6 border border-primary rounded-3 p-24">
        <Formik
          initialValues={form}
          enableReinitialize={true}
          validationSchema={booksSchema}
          onSubmit={async () => {
            try {
              const addUrl = "http://localhost:3001/api/students/";
              await axios.post(addUrl, form);
              console.log(form);
              addSuccess();
              setForm({
                name: "",
                school: "",
                email: "",
                publicYear: "",
                city: "",
              });
            } catch (error) {
              addFail();
              console.log(error);
            }
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
              type="text"
              value={form.school || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="school"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="email">
              email
            </label>
            <Field
              name="email"
              type="email"
              value={form.email || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label
              className="form-label text-capitalize"
              htmlFor="phone_number"
            >
              Phone Number
            </label>
            <Field
              name="phone_number"
              type="number"
              value={form.phone_number || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="phone_number"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="city">
              city
            </label>
            <Field
              name="city"
              type="text"
              value={form.city || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="city"
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

export default AddStudents;
