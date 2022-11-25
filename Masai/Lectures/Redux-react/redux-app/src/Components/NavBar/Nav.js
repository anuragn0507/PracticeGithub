import React, {useState} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <div style={{backgroundColor:"black", borderRadius:"15px"}}>
        <div className="navBar">
            <a href="/">Home</a>
            <a href="/">Profile</a>
            <a href="/">Products</a>
            <a href="/">Users</a>
            <a href="/">Contact Us</a>
        </div>

        </div>
    </div>
  )
}

export default Nav