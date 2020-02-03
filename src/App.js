import React from 'react';
import Maps from './components/Maps'
import Search from './components/Search'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Navbar />
    <div className="App">
    <Route exact path='/login'>
      <Login />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path="/">
      <Search />
      <Maps />
      </Route>
    </div>
    </Router>
  );
}

export default App;
