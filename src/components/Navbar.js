import React from 'react';
import css from '../App.css'
import {BrowserRouter as Router} from "react-router-dom"; 
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
        <h1 className="h1">
        Chocolatey</h1>
        <Router>
          <ul className="sections-list ">
           <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/'>Menu</Link></li>
            <li><Link to = '/'>Contact</Link></li>
           {/* <li class="sections-list__item"><a href="#"  class="sections_link" data-content="home">Home</a></li>
            <li class="sections-list__item"><a href="#"  class="sections_link" data-content="menu">Menu</a></li>
             <li class="sections-list__item"><a href="#"  class="sections_link" data-content="contact">Contact</a></li> */}
         </ul>
       </Router>
         </div>
    );
}
export default Navbar;