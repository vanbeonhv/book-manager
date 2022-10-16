import { CHECK_LOGIN, CHECK_LOGIN_REQUEST } from "../constants/loginConstants";

const initialState = {
  validUser: false,
  data: "",
  message: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
      // console.log(action.payload);
      if (action.payload.length === 1) {
        return {
          ...state,
          data: action.payload,
          validUser: true,
        };
      }
      if (action.payload.length === 0) {
        return {
          ...state,
          data: action.payload,
        };
      }

    default:
      return state;
  }
};

export default loginReducer;
