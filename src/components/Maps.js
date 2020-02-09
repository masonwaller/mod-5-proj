import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { useEffect } from "react";
import "./Maps.css";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";
import { changeBeach, clickedBeach, allBeaches } from "../actions";
import Specific from "./specific";

function Maps(props) {
  const dispatch = useDispatch();
  let all = useSelector(state => state.all);
  let currentBeach = useSelector(state => state.current)

  const mapStyles = {
    width: "75%",
    height: "75%"
  };

  function markerClick(place) {
    dispatch(clickedBeach(place));
    let current = all.beach.find(beach => beach.name === place.name);
    if (current) {
      dispatch(changeBeach(current));
    } else {
      let beach = {
        name: place.name,
        temp: 0,
        weather: 0,
        pollution: 0,
        surf: 0,
        address: `${place.geometry.location.lat}, ${place.geometry.location.lng}`
      };
      fetch(`http://localhost:3001/api/v1/beaches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ beach })
      })
        .then(res => res.json())
        .then(data => dispatch(changeBeach(data.beach)));
        dispatch(allBeaches(...all.beach, currentBeach))
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/beaches`)
      .then(res => res.json())
      .then(res => dispatch(allBeaches(res)));
  }, [currentBeach]);

  return (
    <div>
      <div className="body">
        <Map
          google={props.google}
          zoom={9}
          style={mapStyles}
          center={{
            lat: useSelector(state => state.coords.lat),
            lng: useSelector(state => state.coords.long)
          }}
        >
          {useSelector(state => state.radius).map(place => (
            <Marker
              key={place.id}
              onClick={() => markerClick(place)}
              position={{
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng
              }}
            ></Marker>
          ))}
          <Marker
            position={{
              lat: useSelector(state => state.coords.lat),
              lng: useSelector(state => state.coords.long)
            }}
          />
        </Map>
        <h1>loading</h1>
        <h1>loading</h1>
        <h1>loading</h1>
        <h1>loading</h1>
        <h1>loading</h1>
        <h1>loading</h1>
        <h1>loading</h1>
      </div>
      {useSelector(state => state.current) ? <Specific /> : <Search />}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(Maps);
