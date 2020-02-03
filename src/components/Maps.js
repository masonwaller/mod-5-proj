import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import "./Maps.css";
import { useSelector } from "react-redux";
import Search from "./Search";

function Maps(props) {
  const mapStyles = {
    width: "75%",
    height: "75%"
  };
  return (
    <div>
      <div className="divStyle">
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        center={{
          lat: useSelector(state => state.coords.lat),
          lng: useSelector(state => state.coords.long)
        }}
      >
        <Marker position={{lat: useSelector(state => state.coords.lat), lng: useSelector(state => state.coords.long)}}/>
      </Map>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      </div>
      <div>
      <Search/>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(Maps);
