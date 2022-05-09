import React from 'react'
// import { Router } from 'react-router-dom';
// import { BrowserRouter,Switch,Route,NavLink} from "react-router-dom"
// import ReactDOM from 'react-dom';
// import Navbar3 from './Navbar3';
import './NavBar.css';
import { Auth0Context, useAuth0 } from "@auth0/auth0-react";

// import './App33.css';


export default function NavBar() {
  



  return (
 <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name id />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <img src="images/seeker.jpeg" width={150} />
          <ul className="menu-items">
           
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses | Paths</a></li> 
            <li><a href="/profile">Profile</a></li>

            <li><a  href="/register">Register</a></li>

          
            {/* <li><a href="#"></a></li> */}
          </ul>
          
        </div>
      </nav>

    
  )
}
