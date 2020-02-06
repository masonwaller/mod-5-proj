const currentReducer = (state = '', action) => {
    switch (action.type) {
      case "CURRENT":
        return  action.current;
      default:
        return state;
    }
  };
  
  export default currentReducer;