import React, {useEffect} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./Maps.css";
import { useSelector, useDispatch } from "react-redux";
import { changeBeach, clickedBeach, allBeaches } from "../actions";
import Specific from './specific'



function Top(props) {
    const dispatch = useDispatch();
    const allBeach = useSelector(state=> state.all.beach)
    const top = allBeach.filter(beach => (beach.temp + beach.weather + beach.pollution + beach.surf)/4 > 3.5)

    const mapStyles = {
      width: "74.8%",
      height: '497px'
    };
    
      function markerClick(place) {
        dispatch(clickedBeach(place));
        let current = allBeach.find(beach => beach.name === place.name);
          dispatch(changeBeach(current));
      }

      useEffect(() => {
        fetch(`http://localhost:3001/api/v1/beaches`)
          .then(res => res.json())
          .then(res => dispatch(allBeaches(res)));
      }, []);
    


    return (
        <div>
            <div className='body'>
        <Map
          google={props.google}
          zoom={9}
          style={mapStyles}
          center={{
            lat: useSelector(state => state.coords.lat),
            lng: useSelector(state => state.coords.long)
          }}
        >
          {top.map(place => (
            <Marker
              key={place.id}
              onClick={() => markerClick(place)}
              position={{
                lat: parseFloat(place.address.split(',')[0]),
                lng: parseFloat(place.address.split(',')[1])
              }}>
            </Marker>
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
        {(useSelector(state => state.current))? <Specific/> :
        null}
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAPS_API_KEY
  })(Top);
