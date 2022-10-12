import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  books: bookReducer,
  users: userReducer,
});

export default (state, action) => reducers(state, action);
