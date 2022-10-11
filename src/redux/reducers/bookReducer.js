import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  POST_BOOKS_REQUEST,
  POST_BOOKS_SUCCESS,
  POST_BOOKS_ERROR,
  DELETE_BOOKS_REQUEST,
  DELETE_BOOKS_SUCCESS,
  DELETE_BOOKS_ERROR,
} from "../constants/bookConstants";

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.payload,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: action.payload,
      };
    case POST_BOOKS_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case POST_BOOKS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
      };
    case POST_BOOKS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: action.payload,
      };
    case DELETE_BOOKS_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case DELETE_BOOKS_SUCCESS:
      console.log(action.payload);
      action.payload.payloadData = action.payload.payloadData.filter(
        (book) => book.id !== action.payload.payloadId
      );
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.payload.payloadData,
      };
    case DELETE_BOOKS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
