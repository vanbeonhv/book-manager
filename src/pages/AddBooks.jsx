import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import * as Yup from "yup";

const booksSchema = Yup.object().shape({
  isbn: Yup.number()
    .min(100000000, "Must be 9 numbers at least")
    .max(999999999999, "Must be 12 numbers or less")
    .required("Required"),
  title: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
  publishedYear: Yup.number()
    .max(2022, "Still 2022 bro???")
    .min(1970, "Must be 1970 at least")
    .required("Required"),
  publisher: Yup.string().required("Required"),
  quantity: Yup.number().max(100).required("Required"),
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
const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    isbn: "",
    title: "",
    author: "",
    publicYear: "",
    publisher: "",
    quantity: "",
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
              const addUrl = "http://localhost:3001/api/books/";
              await axios.post(addUrl, form);
              console.log(form);
              addSuccess();
              setForm({
                isbn: "",
                title: "",
                author: "",
                publicYear: "",
                publisher: "",
                quantity: "",
              });
            } catch (error) {
              addFail();
              console.log(error);
            }
          }}
        >
          <Form className="d-flex flex-wrap flex-column">
            <label className="form-label" htmlFor="isbn">
              ISBN
            </label>
            <Field
              name="isbn"
              type="number"
              value={form.isbn || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="isbn"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <Field
              name="title"
              type="text"
              value={form.title || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label" htmlFor="author">
              Author
            </label>
            <Field
              name="author"
              type="text"
              value={form.author || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="author"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label" htmlFor="publishedYear">
              Published Year
            </label>
            <Field
              name="publishedYear"
              type="number"
              value={form.publishedYear || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="publishedYear"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label" htmlFor="publisher">
              Publisher
            </label>
            <Field
              name="publisher"
              type="text"
              value={form.publisher || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="publisher"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label" htmlFor="publisher">
              Quantity
            </label>
            <Field
              name="quantity"
              type="number"
              value={form.quantity || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
            <ErrorMessage
              name="quantity"
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

export default AddBooks;
