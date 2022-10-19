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
  FETCH_EDIT_BOOKS_REQUEST,
  EDIT_BOOKS_REQUEST,
  EDIT_BOOKS_SUCCESS,
  EDIT_BOOKS_ERROR,
} from "../constants/bookConstants";

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      console.log("1");
      return {
        ...state,
        requesting: true,
      };
    case FETCH_BOOKS_SUCCESS:
      console.log("2");
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
      console.log("3");
      return {
        ...state,
        requesting: true,
      };
    case POST_BOOKS_SUCCESS:
      console.log("4");
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
      console.log("5");
      return {
        ...state,
        requesting: true,
      };
    case DELETE_BOOKS_SUCCESS:
      console.log("6");
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
    case FETCH_EDIT_BOOKS_REQUEST:
      console.log("7");
      return {
        ...state,
        requesting: true,
      };
    case EDIT_BOOKS_REQUEST:
      console.log("8");
      return {
        ...state,
        requesting: true,
      };
    case EDIT_BOOKS_SUCCESS:
      console.log("9");
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.payload,
      };
    case EDIT_BOOKS_ERROR:
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
