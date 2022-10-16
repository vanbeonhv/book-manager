import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import loginReducer from "./loginReducer";
import borrowReducer from "./borrowReducer";
import studentReducer from "./studentReducer";

const reducers = combineReducers({
  books: bookReducer,
  borrow: borrowReducer,
  login: loginReducer,
  student: studentReducer,
});

export default (state, action) => reducers(state, action);
