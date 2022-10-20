import { FETCH_USER, DELETE_USER } from "../constants/borrowConstants";

const initialState = {
  data: "",
  message: "",
};

const borrowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_USER:
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

export default borrowReducer;
