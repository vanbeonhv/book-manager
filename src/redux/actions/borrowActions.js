import axios from "axios";
import { FETCH_USER, DELETE_USER } from "../constants/borrowConstants";

export const loadBorrow = () => async (dispatch) => {
  try {
    const url = "https://library-db-marc.herokuapp.com/api/borrow";
    const response = await axios.get(url);

    dispatch({ type: FETCH_USER, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBorrow = (payloadId, payloadData) => async (dispatch) => {
  try {
    const url = "https://library-db-marc.herokuapp.com/api/borrow/" + payloadId;
    await axios.delete(url);
    dispatch({
      type: DELETE_USER,
      payload: { payloadId, payloadData },
    });
  } catch (error) {
    console.log(error);
  }
};
