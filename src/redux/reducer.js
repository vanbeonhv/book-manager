const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Todo":
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default rootReducer;
