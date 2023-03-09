import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { loginCheck } from '../redux/actions/loginActions';
import './LoginPage.css';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username required'),
  password: Yup.string().required('Password required')
});
const loginSuccess = () =>
  toast.success('Login Success!', {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 1500,
    theme: 'colored'
  });

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let validUser = useSelector((state) => state.login.validUser);
  let loginInfo = useSelector((state) => state.login.data);
  const [form, setForm] = useState({
    username: '',
    password: ''
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
      localStorage.setItem('loginTemp', JSON.stringify(loginInfo));
      navigate('dashboard');
    }
  }, [validUser]);
  return (
    <div className=''>
      <div className='vh-100 position-relative'>
        <div className='container py-5 h-100 position-absolute top-25 start-50 translate-middle'>
          <div className='row d-flex align-items-center justify-content-center h-100'>
            <div className='col-md-6 col-lg-7 col-xl-6'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                className='img-fluid'
                alt='Phone image'
              />
            </div>
            <div className='col-md-6 col-lg-5 col-xl-5 offset-xl-1'>
              <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={loginSchema}
                onSubmit={() => {
                  login();
                }}
              >
                <Form>
                  <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='username'>
                      Email address
                    </label>
                    <Field
                      name='username'
                      type='email'
                      value={form.username || ''}
                      onChange={handleChange}
                      className='mb-10 form-control form-control-lg'
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='text-danger fs-6 fst-italic'
                    />
                  </div>

                  <div className='form-outline mb-4'>
                    <label
                      className='form-label text-capitalize'
                      htmlFor='password'
                    >
                      password
                    </label>
                    <Field
                      name='password'
                      type='password'
                      value={form.password || ''}
                      onChange={handleChange}
                      className='mb-10 form-control form-control-lg'
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='text-danger fs-6 fst-italic'
                    />
                  </div>

                  <div className='d-flex justify-content-around align-items-center mb-4'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='checkbox'
                      />
                      <label className='form-check-label' htmlFor='checkbox'>
                        Remember me
                      </label>
                    </div>
                    <a href='#!'>Forgot password?</a>
                  </div>

                  <button
                    type='submit'
                    className='btn btn-primary text-white loginBtn btn-lg btn-block mt-12'
                  >
                    Login
                  </button>

                  <div className='divider d-flex align-items-center my-4'></div>
                  <div>
                    <p>
                      <span className='text-danger'>Admin account: </span>
                      admin@gmail.com - letmein
                    </p>
                    <p>
                      <span className='text-danger'>Manager account: </span>
                      manager1@gmail.com - letmein
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
