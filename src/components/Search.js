import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {changeLocation} from '../actions';



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

    return (
      <div>
          <button onClick={() => getLocation()}>click</button>

      </div>
    );
  }
  
  export default Search;