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
  let image = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uihere.com%2Ffree-cliparts%2Fsearch%3Fq%3Dyou%2BAre%2BHere%2B%2BSign&psig=AOvVaw0rDu9J1eOniCkbJPvrSy2F&ust=1581526500199000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDTvML7yecCFQAAAAAdAAAAABAW`

  const mapStyles = {
    width: "74.8%",
    height: '497px'
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
        {useSelector(state => state.current) ? <Specific /> : <Search />}
        <br/>
        <br/>

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
        <Marker position={{lat: useSelector(state => state.coords.lat),
              lng: useSelector(state => state.coords.long)
            }} icon={{
              url: 'unnamed.png',
              scaledSize: new window.google.maps.Size(30, 30)
            }}/>
        </Map>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(Maps);
