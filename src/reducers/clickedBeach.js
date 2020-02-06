const beachReducer = (state = {}, action) => {
    switch (action.type) {
      case "BEACH":
        return  action.beach;
      default:
        return state;
    }
  };
  
  export default beachReducer;