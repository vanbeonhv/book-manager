import axios from 'axios';
import { DELETE_STUDENTS, FETCH_STUDENTS } from '../constants/studentConstants';

export const loadStudents = () => async (dispatch) => {
  const url = 'https://book-database-z5rg.onrender.com/api/students';
  const response = await axios.get(url);
  dispatch({
    type: FETCH_STUDENTS,
    payload: response.data
  });
};

export const deleteStudents = (payloadId, payloadData) => async (dispatch) => {
  try {
    const url =
      'https://book-database-z5rg.onrender.com/api/students/' + payloadId;
    await axios.delete(url);
    dispatch({
      type: DELETE_STUDENTS,
      payload: { payloadId, payloadData }
    });
  } catch (error) {
    console.log(error);
  }
};
