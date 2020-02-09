const allReducer = (state = {beach: []}, action) => {
    switch (action.type) {
      case "ALL":
        return action.all;
      default:
        return state;
    }
  };
  
  export default allReducer;