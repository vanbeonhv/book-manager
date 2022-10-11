import axios from "axios";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  POST_BOOKS_REQUEST,
  POST_BOOKS_SUCCESS,
  POST_BOOKS_ERROR,
  DELETE_BOOKS_REQUEST,
  DELETE_BOOKS_SUCCESS,
  DELETE_BOOKS_ERROR,
} from "../constants/bookConstants";

export const loadBooks = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_BOOKS_REQUEST });
    const url = "http://localhost:3001/api/books";
    const params = {
      _start: 35,
      _limit: 10,
    };
    const response = await axios.get(url, { params });
    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_BOOKS_ERROR,
      payload: error,
    });
  }
};

export const addBooks = (payload) => async (dispatch) => {
  try {
    dispatch({ type: POST_BOOKS_REQUEST });
    const url = "http://localhost:3001/api/books/";
    await axios.post(url, payload);
    dispatch({
      type: POST_BOOKS_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_BOOKS_ERROR,
      payload: error,
    });
  }
};

export const deleteBooks = (payloadId, payloadData) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BOOKS_REQUEST });
    const url = "http://localhost:3001/api/books/" + payloadId;
    await axios.delete(url);
    dispatch({
      type: DELETE_BOOKS_SUCCESS,
      payload: { payloadId, payloadData },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_BOOKS_ERROR,
      payload: error,
    });
  }
};
