import axios from "axios";
import {
  FETCH_USER,
  FETCH_UNIVERSITY,
  ADD_USER,
  DELETE_USER,
  DELETE_USER_REQUEST,
  FETCH_EDIT_USER,
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

export const loadUniversities = (callback) => async (dispatch) => {
  const url = "http://localhost:3001/api/university";
  const response = await axios.get(url);
  callback(response);
};

export const addUsers = (payload) => async (dispatch) => {
  const url = "http://localhost:3001/api/users";
  // console.log(payload);

  await axios.post(url, payload);
};

export const loadEditUsers = (payloadId, payloadCb) => async (dispatch) => {
  dispatch({ type: FETCH_EDIT_USER });
  const url = "http://localhost:3001/api/users/" + payloadId;
  const response = await axios.get(url);
  payloadCb(response);
};

export const editUsers = (payloadId, payloadData) => async (dispatch) => {
  console.log(payloadId, payloadData);
  const url = "http://localhost:3001/api/users/" + payloadId;
  const response = await axios.put(url, payloadData);
  // dispatch({
  //   type: EDIT_USER,
  //   payload: response.data,
  // });
};

export const deleteUsers = (payloadId, payloadData) => async (dispatch) => {
  // dispatch({ type: DELETE_USER_REQUEST });
  const url = "http://localhost:3001/api/users/" + payloadId;
  await axios.delete(url);
  // console.log(payloadId, payloadData);
  dispatch({
    type: DELETE_USER,
    payload: { payloadId, payloadData },
  });
};
