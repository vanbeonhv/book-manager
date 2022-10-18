import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../constants/loginConstants";

export const loginCheck = (payload) => async (dispatch) => {
  const url = "http://localhost:3001/api/login";
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
      payload: userInfo,
    });
  }
  if (userInfo.length === 0) {
    dispatch({
      type: LOGIN_FAIL,
    });
    alert("Invalid username or password");
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
