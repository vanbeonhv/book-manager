import axios from "axios";
import {
  FETCH_USER,
  FETCH_UNIVERSITY,
  ADD_USER,
} from "../constants/userConstants";

export const loadUsers = () => async (dispatch) => {
  const url = "http://localhost:3001/api/users";
  const params = {
    _start: 35,
    _limit: 10,
  };
  const response = await axios.get(url, { params });

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const addUsers = (payload) => async (dispatch) => {
  const url = "http://localhost:3001/api/users";

  const response = await axios.post(url, { payload });

  dispatch({ type: ADD_USER, payload: response.data });
};

export const loadUniversity = () => async (dispatch) => {
  const url = "http://localhost:3001/api/university";
  const response = await axios.get(url);
  dispatch({ type: FETCH_UNIVERSITY, payload: response.data });
  // console.log(response);
};
