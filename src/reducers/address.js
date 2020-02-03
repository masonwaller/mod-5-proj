const addressReducer = (state = '', action) => {
    switch (action.type) {
      case "ADDY":
        return {address: action.address};
      default:
        return state;
    }
  };
  
  export default addressReducer;