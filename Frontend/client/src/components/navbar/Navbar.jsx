import "./navbar.scss";
import Image2 from "../../assets/im112.jpg";
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext} from "react";

import log from "../../assets/mainlogo1.png"


import React, { useState, useEffect } from 'react';

function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext)
  
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = ()=>{
      localStorage.clear();
      navigate('/back');
  }
  return (
    <div className='navbar'>

  <nav>
    <div class="wrapper">
      <div class="logo"><a href="/"> <img src={log} alt=""/></a></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><MenuIcon/></label>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/features">Features</a></li>
        <li>
          <a href="#" class="desktop-item">Others</a>
          <input type="checkbox" id="showDrop"/>
          <label for="showDrop" class="mobile-item">Others</label>
          
          <ul class="drop-menu">
            <li><a href="/add">FeedBack</a></li>
            <li><a href="/req">Nutrition Profiles</a></li>
            <li><a href="/categories">View Content</a></li>
            <li><a href="/track">Add Child</a></li>
             <li><a href="/parentviewreq">Diet History</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="desktop-item">Mega Menu</a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" class="mobile-item">Mega Menu</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg" alt=""/>
              </div>
              <div class="row">
                <header>Gallery Services</header>
                <ul class="mega-links">
                  <li><a href="/share">Share Posts</a></li>
                  <li><a href="/gallery">View Posts</a></li>
                  <li><a href="/profile/:id">View Profile</a></li>
                  
                </ul>
              </div>
              <div class="row">
                <header>Main Services</header>
                <ul class="mega-links">
                  <li><a href="/addQuery">Post Query</a></li>
                  <li><a href="/req">Request Diet</a></li>
                  <li><a href="/categories">View Content</a></li>

                </ul>
              </div>
              <div class="row">
                <header>Profile Settings</header>
                <ul class="mega-links">
                  
                  
                  <li className="hi"><a onClick={logout}>Logout</a></li>
                  <li className="hi"><a href="/reset">Change Password</a></li>
                  <li className="hi"><a onClick={toggle}>Theme Change</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      
      </ul>
      <label for="menu-btn" class="btn menu-btn"><MenuIcon/></label>
    </div>
  </nav>
 

</div>

  
  )
}

export default Navbar
