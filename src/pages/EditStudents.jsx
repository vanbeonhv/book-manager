import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import * as Yup from "yup";
import { editBooks, loadEditBooks } from "../redux/actions/bookActions";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const booksSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  phone_number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  city: Yup.string().required("Required"),
});
const editSuccess = () =>
  toast.success("Edited!", {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 1000,
    theme: "colored",
    transition: Slide,
  });

const EditStudents = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  useEffect(() => {
    const loadEditStudent = async (id) => {
      try {
        const url = "http://localhost:3001/api/students/" + id;
        const response = await axios.get(url);
        setForm(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadEditStudent(id);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            const editUrl = "http://localhost:3001/api/students/" + id;
            await axios.put(editUrl, form);
            editSuccess();
          }}
        >
          <Form className="d-flex flex-wrap flex-column">
            <label className="form-label text-capitalize" htmlFor="name">
              name
            </label>
            <Field
              name="name"
              type="name"
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
              type="text"
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
              phone number
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

export default EditStudents;
