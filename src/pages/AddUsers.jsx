import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useField,
  useFormikContext,
} from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addBooks } from "../redux/actions/bookActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";

const booksSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  class: Yup.string().required("Required"),
  borrow_day: Yup.date().required("Required"),
  status: Yup.string().required("Required"),
});

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      // onChange={(val) => {
      //   setFieldValue(field.name, val);
      // }}
    />
  );
};
const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    school: "",
    class: "",
    borrow_day: "",
    return_day: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            dispatch(addBooks(form));
            alert("add successfully!");
            setForm({
              name: "",
              school: "",
              class: "",
              borrow_day: "",
              return_day: "",
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
              <option value="Hyogo University">Hyogo University</option>
              <option value="Indian Institute of Technology">
                Indian Institute of Technology
              </option>
              <option value="Ensea">Ensea</option>
              <option value="Islamic Azad University">
                Islamic Azad University
              </option>
              <option value="Université Chrétienne Bilingue du Congo">
                Université Chrétienne Bilingue du Congo
              </option>
            </Field>
            <ErrorMessage
              name="school"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="class">
              class
            </label>
            <Field
              name="class"
              as="select"
              value={form.class || ""}
              onChange={handleChange}
              className="mb-10 form-select"
            >
              <option value="">Select an Class</option>
              <option value="11CNJ02">11CNJ02</option>
              <option value="20CNADL03">20CNADL03</option>
              <option value="06CNT01">06CNT01</option>
              <option value="19CNH01">19CNH01</option>
              <option value="08CNA02">08CNA02</option>
            </Field>
            <ErrorMessage
              name="class"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="borrow_day">
              borrow day
            </label>
            <DatePickerField
              name="borrow_day"
              dateFormat="dd/MM/yyyy"
              onChange={(value) =>
                console.log(format(parseISO(value)), "dd-MM-yyyy")
              }
              // value={form.borrow_day || ""}
              // className="mb-10 form-control"
            />
            {/* <Field
              name="borrow_day"
              type="text"
              value={form.borrow_day || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            /> */}
            <ErrorMessage
              name="borrow_day"
              component="div"
              className="text-danger fs-6 fst-italic"
            />
            <label className="form-label text-capitalize" htmlFor="status">
              status
            </label>
            <Field
              name="status"
              type="text"
              value={form.status || ""}
              onChange={handleChange}
              className="mb-10 form-control"
            />
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
