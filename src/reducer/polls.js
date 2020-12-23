const pollsReducer = (state = null, action) => {
  switch (action.type) {
    case "POLL":
      return action.payload;
    default:
      return state;
  }
};
export default pollsReducer;
