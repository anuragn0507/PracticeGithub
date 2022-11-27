import React, {useState} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <div style={{backgroundColor:"black", borderRadius:"15px"}}>
        <div className="navBar">
            <a href="/">Redux</a>
            <a href="/elec">Electronics</a>
            <a href="/jewel">Jewelery</a>
            <a href="/">Cart</a>
            <a href="/">Contact Us</a>
        </div>

        </div>
    </div>
  )
}

export default Nav