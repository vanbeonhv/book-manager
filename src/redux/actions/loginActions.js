import axios from "axios";
import { CHECK_LOGIN, CHECK_LOGIN_REQUEST } from "../constants/loginConstants";

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

  dispatch({
    type: CHECK_LOGIN,
    payload: userInfo,
  });
};
