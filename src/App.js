import React from 'react';
import Maps from './components/Maps'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from './components/Top.js'
import history from './history.js'


function App() {

  return (
    <div>
      <Navbar />
    <div className="App">
    <Route exact path='/login'>
      <Login />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path="/">
      <Maps />
      </Route>
      <Route exact path="/toprated">
      <Top />
      </Route>
    </div>
    </div>
  );
}

export default App;
