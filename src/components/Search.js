import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {changeLocation, changeAdd} from '../actions';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


function Search() {
    const dispatch = useDispatch()

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            dispatch(changeLocation(position.coords.latitude, position.coords.longitude))
          });
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
      function handleChange(e){
        dispatch(changeAdd(e));
      };
     
      const handleSelect= (address)=>{
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => dispatch(changeLocation(latLng.lat, latLng.lng)))
          .catch(error => console.error('Error', error));
      };
    
    return (
      <div>
          <button onClick={() => getLocation()}>click2</button>

          <PlacesAutocomplete
        value={useSelector(state => state.address.address)}
        onChange={(e) => handleChange(e)}
        onSelect={(e) => handleSelect(e)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
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
    );
  }
  
  export default Search;