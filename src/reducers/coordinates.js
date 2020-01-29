
const locationReducer = (state = {lat: 47.444, long: -122.176}, action) => {
  switch (action.type) {
    case "COORDS":
      return {lat: action.lat, long: action.long};
    default:
      return state;
  }
};

export default locationReducer;
