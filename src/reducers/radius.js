const radiusReducer = (state = [], action) => {
    switch (action.type) {
      case "RADIUS":
        return action.radius;
      default:
        return state;
    }
  };
  
  export default radiusReducer;