import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../constants/loginConstants";

const initialState = {
  validUser: null,
  data: [
    {
      username: "",
      password: "",
      name: "",
      img: "",
      role: "",
    },
  ],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        validUser: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        validUser: false,
      };
    case LOGOUT:
      return {
        validUser: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
