import axios from 'axios';
import BACKEND_LINK from '../../constant';
import { FETCH_USER, DELETE_USER } from '../constants/borrowConstants';

export const loadBorrow = () => async (dispatch) => {
  try {
    const url = `${BACKEND_LINK}/api/borrow`;
    const response = await axios.get(url);

    dispatch({ type: FETCH_USER, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBorrow = (payloadId, payloadData) => async (dispatch) => {
  try {
    const url = `${BACKEND_LINK}/api/borrow/${payloadId}`;
    await axios.delete(url);
    dispatch({
      type: DELETE_USER,
      payload: { payloadId, payloadData }
    });
  } catch (error) {
    console.log(error);
  }
};
