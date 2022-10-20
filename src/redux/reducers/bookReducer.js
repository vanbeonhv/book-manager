import {
  FETCH_BOOKS_SUCCESS,
  DELETE_BOOKS_SUCCESS,
} from "../constants/bookConstants";

const initialState = {
  data: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_BOOKS_SUCCESS:
      console.log(action.payload);
      action.payload.payloadData = action.payload.payloadData.filter(
        (book) => book.id !== action.payload.payloadId
      );
      return {
        ...state,
        data: action.payload.payloadData,
      };
    default:
      return state;
  }
};

export default bookReducer;
