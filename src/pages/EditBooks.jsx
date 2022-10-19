import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { editBooks, loadEditBooks } from "../redux/actions/bookActions";

const booksSchema = Yup.object().shape({
  isbn: Yup.number().required("Required"),
  title: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
  publishedYear: Yup.number()
    .max(2030, "Must be 2030 or less")
    .required("Required"),
  publisher: Yup.string().required("Required"),
  quantity: Yup.number().max(100).required("Required"),
});

const EditBooks = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.books.data);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  useEffect((id) => {
    console.log(id);
    const loadEditBooks = async (id) => {
      try {
        const url = "http://localhost:3001/api/books/" + id;
        const response = await axios.get(url);
        console.log(response);
      } catch {}
    };
    loadEditBooks(id);
    // dispatch(
    //   loadEditBooks(id, (res) => {
    //     setForm(res.data);
    //   })
    // );
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            dispatch(editBooks(id, form));
            alert("Edit successfully!");
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

export default EditBooks;
