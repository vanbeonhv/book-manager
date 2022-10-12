import axios from "axios";
import { FETCH_USER } from "../constants/userConstants";

export const loadUsers = () => async (dispatch) => {
  const url = "http://localhost:3001/api/users";
  const params = {
    _start: 35,
    _limit: 10,
  };
  const response = await axios.get(url, { params });
  dispatch({ type: FETCH_USER, payload: response.data });
};
