import React from 'react';
import logo from '../Assets/logo.png';


export default function NavBAr() {
    return (
       <>
       <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img src={logo} alt='logo'></img>
            <a className="navbar-brand pl-2" href="/">AirCnc</a>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/host-home">Host your home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/host-experience">Host your experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/signup">Signup</a>
            </li>
            </ul>
    
        </div>
        <hr/>
        </nav>
       
       </>
    )
}
