import axios from "axios";
import {
  FETCH_USER,
  FETCH_UNIVERSITY,
  ADD_USER,
  DELETE_USER,
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

export const loadUniversity = () => async (dispatch) => {
  const url = "http://localhost:3001/api/university";
  const response = await axios.get(url);
  // console.log(response);
  dispatch({ type: FETCH_UNIVERSITY, payload: response.data });
};

export const addUsers = (payload) => async (dispatch) => {
  const url = "http://localhost:3001/api/users";
  console.log(payload);

  await axios.post(url, payload);
  dispatch({ type: ADD_USER });
};

export const deleteUsers = (payloadId, payloadData) => async (dispatch) => {
  const url = "http://localhost:3001/api/users/" + payloadId;
  await axios.delete(url);
  console.log(payloadId, payloadData);
  dispatch({
    type: DELETE_USER,
    payload: { payloadId, payloadData },
  });
};
