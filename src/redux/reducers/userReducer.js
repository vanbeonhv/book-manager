import {
  FETCH_USER,
  FETCH_UNIVERSITY,
  ADD_USER,
  DELETE_USER,
} from "../constants/userConstants";

const initialState = {
  data: "",
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_UNIVERSITY:
      // console.log("fetching university");
      return {
        ...state,
        data: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        // data: action.payload,
      };
    case DELETE_USER:
      action.payload.payloadData = action.payload.payloadData.filter(
        (user) => user.id !== action.payload.payloadId
      );
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
