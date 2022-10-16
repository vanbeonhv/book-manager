import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginCheck } from "../redux/actions/loginActions";
import Admin from "../users/Admin";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username required"),
  password: Yup.string().required("Password required"),
});

const LoginPage = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validUser = useSelector((state) => state.login.validUser);
  // const requesting = useSelector((state) => state.login.requesting);
  // console.log("loginInfo: " + loginInfo);
  // console.log("requesting " + requesting);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  // useEffect(() => {
  //   dispatch(loginCheck(form));
  // }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="row position-relative vh-100 overflow-hidden">
      {/* <Routes>
        <Route path="/dashboard" element={<Admin />} />
      </Routes> */}
      <div className="col-4 vh-100 overflow-hidden">
        <div className="border border-primary rounded-3 position-absolute top-50 start-50 translate-middle p-24">
          <Formik
            initialValues={form}
            enableReinitialize={true}
            validationSchema={loginSchema}
            onSubmit={() => {
              dispatch(loginCheck(form));
              // navigate("dashboard");

              console.log("validUser: " + validUser);
              // setTimeout(() => {
              if (validUser) {
                alert("login successfully!");
                navigate("dashboard");
              } else {
                alert("Invalid username or password");
              }
              // }, 1000);
            }}
          >
            <Form className="d-flex flex-wrap flex-column">
              <label className="form-label text-capitalize" htmlFor="username">
                username
              </label>
              <Field
                name="username"
                type="email"
                value={form.username || ""}
                onChange={handleChange}
                className="mb-10 form-control"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger fs-6 fst-italic"
              />
              <label className="form-label text-capitalize" htmlFor="password">
                password
              </label>
              <Field
                name="password"
                type="password"
                value={form.password || ""}
                onChange={handleChange}
                className="mb-10 form-control"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger fs-6 fst-italic"
              />
              <div className="text-center pt-24">
                <button type="submit" className="btn btn-primary text-white">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default LoginPage;
