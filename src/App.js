import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {changeLogged} from './actions';
import Maps from './components/Maps'
import Search from './components/Search'


function App() {
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        {(!logged) ? 
        <h1>hello</h1> : console.log("hi")}
        <button onClick={() => dispatch(changeLogged(5))}>click</button>
      </header>
      <Search />
      <Maps />
    </div>
  );
}

export default App;
