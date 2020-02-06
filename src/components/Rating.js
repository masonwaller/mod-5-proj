import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {changeBeach} from '../actions'

export default function Rating() {
    const [temp, setTemp] = React.useState(5)
    const [weather, setWeather] = React.useState(5)
    const [poll, setPoll] = React.useState(5)
    const [surf, setSurf] = React.useState(5)

    const dispatch = useDispatch()

    function temperature(e) {
        e.preventDefault()
        setTemp(parseFloat(e.target.value))
    }
    function weath(e) {
        e.preventDefault()
        setWeather(parseFloat(e.target.value))
    }
    function pollution(e) {
        e.preventDefault()
        setPoll(parseFloat(e.target.value))
    }
    function surfing(e) {
        e.preventDefault()
        setSurf(parseFloat(e.target.value))
    }
    let logged = useSelector(state => state.logged)
    let current = useSelector(state => state.current);
    function handleSubmit(e) {
        e.preventDefault()
        if (logged) {
        let beach = {
            name: current.name,
            temp: (current.temp + temp)/2,
            weather: (current.weather + weather)/2,
            pollution: (current.pollution + poll)/2,
            surf: (current.surf + surf)/2,
            address: current.address
          };
          console.log(beach)
        fetch(`http://localhost:3001/api/v1/beaches/${current.id}`, {
            method: 'PATCH',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },                                                              
            body: JSON.stringify( { beach } )                                        
          }).then(res => res.json()).then(res => dispatch(changeBeach(res.beach)))}
          else{ alert('You must be logged in to rate this beach')}
    }


    return (
        <div>
            <h1>Rate this beach!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                Temperature
                <select onChange={(e)=> temperature(e)}>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
                Weather
                <select onChange={(e)=> weath(e)}>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
                Pollution
                <select onChange={(e)=> pollution(e)}>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
                Surf
                <select onChange={(e)=> surfing(e)}>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
                <input type='submit' />
            </form>
        </div>
    )
}
