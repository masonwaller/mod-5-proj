import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLocation, changeAdd, changeRadius } from "../actions";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Dropdown } from "semantic-ui-react";


function Search() {
  const dispatch = useDispatch();
  const lat = useSelector(state => state.coords.lat);
  const lng = useSelector(state => state.coords.long);
  let logged = useSelector(state => state.logged)
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          changeLocation(position.coords.latitude, position.coords.longitude)
        );
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function handleChange(e) {
    dispatch(changeAdd(e));
  }
  function changeRad(e) {
    const radius = parseInt(e.target.innerText) * 1000
    const proxy = `https://cors-anywhere.herokuapp.com/`
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=natural_feature&keyword=beach&key=${process.env.REACT_APP_MAPS_API_KEY}`
    console.log(proxy + url)
    fetch(proxy +
      url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
         }})
         .then(res => {
            const data = res.json();
            return data;
         })
         .then(res => {
          console.log(res.results.length)
          dispatch(changeRadius(res.results))
         });
  }

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => dispatch(changeLocation(latLng.lat, latLng.lng)))
      .catch(error => console.error("Error", error));
  };
  const options = [
    { key: 30, value: 30, text: '30 km' },
    { key: 40, value: 40, text: '40 km' },
    { key: 50, value: 50, text: '50 km' }
  ];

  return (
    <>
      <h3 className="banner">"Life's a beach, I'm just playin in da sand!" {(logged) ? ` - ${logged.user.username}`: null}</h3>
    <div className='form__search'>
      <div className="form__left">
      <Dropdown
        placeholder="Beaches in this area"
        fluid
        selection
        options={options}
        onChange={e => changeRad(e)}
        />
        <br/>
        <button id="button" onClick={() => getLocation()}>Get Current Location</button>
      </div>

      <div className="form__right">
      <PlacesAutocomplete
        value={useSelector(state => state.address.address)}
        onChange={e => handleChange(e)}
        onSelect={e => handleSelect(e)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        
      </div> 
    </div>
    </>
  );
}

export default Search;
