import React from 'react';
import logo from '../assets/AOE_TD_LOGO.png';

const HeaderNav = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
        </a>
        <a className="navbar-brand" href="/">AoE TD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/game">Game <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/info">Info <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/">Help <span className="sr-only">(current)</span></a>
            </li>
            </ul>
            <ul className="navbar-nav mr-2">
            <li className="nav-item active">
                <a className="nav-link" href="/">Highscore <span className="sr-only">(current)</span></a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    )
}

export default HeaderNav;