import axios from "axios";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../constants/bookConstants";

export const loadBooks = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_BOOKS_REQUEST });
    const url = "http://localhost:3001/api/books";
    const response = await axios.get(url);
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

  // const response = await axios.get("http://localhost:3001/api/books");
  // dispatch({
  //   type:
  // })
};
