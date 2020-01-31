import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react'
import './Maps.css'
import {useSelector} from 'react-redux'

function Maps(props) {

        const mapStyles = {
            width: '75%',
            height: '75%',

          };
        return(
            <div className='divStyle'>
            <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            center={{ lat: useSelector(state => state.coords.lat), lng: useSelector(state => state.coords.long)}}
          />
          </div>
        )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAPS_API_KEY
  })(Maps);