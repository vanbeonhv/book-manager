import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const reducers = combineReducers({
  books: bookReducer,
});

export default (state, action) => reducers(state, action);
