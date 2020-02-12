import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {changeBeach} from '../actions'

export default function Writereview() {
    const [text, setText] = React.useState('')
    const [date, setDate] = React.useState('')
    let logged = useSelector(state => state.logged)
    let current = useSelector(state => state.current)
    let dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        if (logged) {
        let review = {
            user_id: logged.user.id,
            beach_id: current.id,
            text: text,
            date: date
          };
          fetch(`http://localhost:3001/api/v1/reviews`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({ review })
          })
            .then(res => res.json())
            .then(data => dispatch(changeBeach(data.beach)));}
            else {alert('You must be logged in to write a review!')}
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                Review: <input type='text' name='review' value={text} onChange={(e) => setText(e.target.value)}></input>
                Date You Went: <input type='text' name='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}