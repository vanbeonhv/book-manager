import axios from "axios";
import { useState } from "react";
import {
  FETCH_BOOKS_SUCCESS,
  DELETE_BOOKS_SUCCESS,
} from "../constants/bookConstants";

export const loadBooks = () => async (dispatch) => {
  try {
    const url = "http://localhost:3001/api/books";
    const response = await axios.get(url);

    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooks = (payloadId, payloadData) => async (dispatch) => {
  try {
    const url = "http://localhost:3001/api/books/" + payloadId;
    await axios.delete(url);
    dispatch({
      type: DELETE_BOOKS_SUCCESS,
      payload: { payloadId, payloadData },
    });
  } catch (error) {
    console.log(error);
  }
};
