import React from 'react';
import NavBAr from './Components/NavBAr';
import Home from './Components/Home';
import './App.css';
import Map from './Components/Map';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import HostHome from './Components/HostHome';


function App() {
  return (
    <>
      <NavBAr></NavBAr>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/host-home' component={HostHome}/>
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
