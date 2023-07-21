import React from "react";
import './header.css'
import {Link} from 'react-router-dom'
import { BiUser, BiLogOut } from "react-icons/bi";
import { IoMdSettings} from "react-icons/io";
function hedaer() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Uznauka.uz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Admin name</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/profil" className="nav-link active" aria-current="page" href="#"><BiUser className="header-icons" />Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/setting" className="nav-link" href="#"><IoMdSettings className="header-icons" />Sozlamalar</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link" href="#"><BiLogOut className="header-icons" />Chiqish</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
</nav>
  );
}

export default hedaer;
