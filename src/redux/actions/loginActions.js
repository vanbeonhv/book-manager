import axios from 'axios';
import { toast } from 'react-toastify';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../constants/loginConstants';

export const loginCheck = (payload) => async (dispatch) => {
  const url = 'https://book-database-z5rg.onrender.com/api/login';
  const response = await axios.get(url);
  const { username, password } = payload;
  const userData = response.data;
  let userInfo = [];

  userInfo = userData.filter(
    (userInfo) =>
      userInfo.username === username && userInfo.password === password
  );

  if (userInfo.length === 1) {
    // const userInfoFormatted = Object.keys(userInfo);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: userInfo
    });
  }
  if (userInfo.length === 0) {
    dispatch({
      type: LOGIN_FAIL
    });
    const loginFail = () =>
      toast.error('Invalid username or password!', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 1000,
        theme: 'colored'
      });
    loginFail();
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  });
};
