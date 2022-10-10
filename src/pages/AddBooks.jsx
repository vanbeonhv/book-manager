import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addBooks } from "../redux/actions/bookActions";

const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ISBN: "",
    Title: "",
    Author: "",
    PublicYear: "",
    Publisher: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <Formik
          enableReinitialize={true}
          initialState={form}
          validationSchema={Yup.object().shape({
            ISBN: Yup.number().required("Required"),
            Title: Yup.string().required("Required"),
            Author: Yup.string()
              .max(30, "Must be 30 character or less")
              .required("Required"),
            PublicYear: Yup.number()
              .max(2030, "Must be 2030 or less")
              .required("Required"),
            Publisher: Yup.string()
              .max(8, "Must be 8 character or less")
              .required("Required"),
          })}
          onSubmit={() => {
            // dispatch(addBooks(form));
            console.log("test");
          }}
        >
          <Form className="d-flex flex-wrap flex-column">
            <label htmlFor="ISBN" className="">
              ISBN
            </label>
            <Field
              name="ISBN"
              type="text"
              value={form.ISBN || ""}
              onChange={handleChange}
              className="mb-10"
            />
            <ErrorMessage name="ISBN" />
            <label htmlFor="Title">Title</label>
            <Field
              name="Title"
              type="text"
              value={form.Title || ""}
              onChange={handleChange}
              className="mb-10"
            />
            <ErrorMessage name="Title" />
            <label htmlFor="Author">Author</label>
            <Field
              name="Author"
              type="text"
              value={form.Author || ""}
              onChange={handleChange}
              className="mb-10"
            />
            <ErrorMessage name="Author" />
            <label htmlFor="PublicYear">PublicYear</label>
            <Field
              name="PublicYear"
              type="text"
              value={form.PublicYear || ""}
              onChange={handleChange}
              className="mb-10"
            />
            <ErrorMessage name="PublicYear" />
            <label htmlFor="Publisher">Publisher</label>
            <Field
              name="Publisher"
              type="text"
              value={form.Publisher || ""}
              onChange={handleChange}
              className="mb-10"
            />
            <ErrorMessage name="Publisher" />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Button
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default AddBooks;
