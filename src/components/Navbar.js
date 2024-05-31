import React from 'react'
import PropTypes from 'prop-types'
// import { 
//     a 
// } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" herf="#">{props.title}</a>
        <butherfn className="navbar-herfggler" type="butherfn" data-bs-herfggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="herfggle navigation">
            <span className="navbar-herfggler-icon"></span>
        </butherfn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auherf mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-a active" aria-current="page" herf="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-a" herf="/about">{props.abt}</a>
            </li>
            </ul>

            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input class="form-check-input" onClick={props.herfggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <butherfn classNameName="btn btn-outline-success" type="submit">Search</butherfn>
            </form> */}
        </div>
        </div>
        </nav>

    </>
  )
}


Navbar.proherfTypes = {
    title : PropTypes.string,
    abt : PropTypes.string
}

Navbar.defaultProps = {
    title : 'Set title here',
    abt: 'About text here'
}