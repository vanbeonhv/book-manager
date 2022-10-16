import { DELETE_STUDENTS, FETCH_STUDENTS } from "../constants/studentConstants";

const initialState = {
  data: "",
  message: "",
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_STUDENTS:
      action.payload.payloadData = action.payload.payloadData.filter(
        (user) => user.id !== action.payload.payloadId
      );
      return {
        ...state,
        data: action.payload.payloadData,
      };
    default:
      return state;
  }
};

export default studentReducer;
