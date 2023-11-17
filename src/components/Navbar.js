

import React from 'react'

import { NavLink } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <div>
        {/* <nav className={ `navbar navbar-expand-lg expand-${props.Mode} bg-${props.Mode} `}> */} 
         {/* this is change with direct mode  */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

    <div className="container-fluid"  style={{color: 
    props.mode=== 'dark'?'white':'black' }}>
      <a className={`text-dark form-check-label navbar-brand text-light `}  href="/"  >TextUtils</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar" aria-controls="Navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="Navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about/">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact/">contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div>


        
{/* <div className="form-check form-switch"> */}

<div className={`form-check form-switch text-${props.Mode=== 'light'?'dark':'light' }`}>

  <input className="form-check-input"  onClick={props.togglemode}  type="checkbox" role="switch" id="myswitch"/>
  <label className="form-check-label" htmlFor="myswitch">Enable dark mode</label>
</div>
</div>

    </div>
  </nav>
  </div>
  )
}


