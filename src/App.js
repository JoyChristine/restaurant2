// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import menu from './components/Menu';
import home from './components/Home';
import contact from './components/Contact';



function App() {
    return (  
    <>
        <Navbar /> 
        <Router>
     <Switch>
        <Route exact patch ='/' component={home} /> 
        <Route exact patch ='/menu' component={menu} />
        <Route exact patch ='/contact' component={contact} />
    </Switch> 
    </Router>

    </>
    );

}
export default App;