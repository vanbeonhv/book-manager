import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { loginCheck } from "../redux/actions/loginActions";
import Admin from "../users/Admin";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username required"),
  password: Yup.string().required("Password required"),
});
let n = 0;
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let validUser = useSelector((state) => state.login.validUser);
  let loginInfo = useSelector((state) => state.login.data);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const login = () => {
    dispatch(loginCheck(form));
  };
  useEffect(() => {
    if (validUser) {
      // alert("login successfully!");
      loginSuccess();
      localStorage.setItem("loginTemp", JSON.stringify(loginInfo));
      navigate("dashboard");
    }
  }, [validUser]);

  const loginSuccess = () =>
    toast.success("Login Success!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 1500,
      theme: "colored",
    });
  return (
    <div className="row position-relative vh-100 vw-100 overflow-hidden">
      <div className="col-4 vh-100 overflow-hidden">
        <div className="border border-primary rounded-3 position-absolute top-50 start-50 translate-middle p-24">
          <Formik
            initialValues={form}
            enableReinitialize={true}
            validationSchema={loginSchema}
            onSubmit={() => {
              login();
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
                <button
                  type="submit"
                  className="btn btn-primary text-white loginBtn"
                >
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
