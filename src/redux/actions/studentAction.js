import axios from "axios";
import { DELETE_STUDENTS, FETCH_STUDENTS } from "../constants/studentConstants";

export const loadStudents = () => async (dispatch) => {
  const url = "http://localhost:3001/api/students";
  const params = {
    _start: 35,
    _limit: 10,
  };
  const response = await axios.get(url, { params });
  dispatch({
    type: FETCH_STUDENTS,
    payload: response.data,
  });
};
