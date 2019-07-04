import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const Header =() =>{
        /*var handleChange = (event)=>{

        }*/
        return (
            <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
             <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <Link className="navbar-brand" to="#pablo">Dashboard</Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <SearchBar />
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="#pablo">
                  <i className="now-ui-icons media-2_sound-wave"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="">
                  <i className="now-ui-icons location_world"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="#">Action</Link>
                  <Link className="dropdown-item" to="#">Another action</Link>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#pablo">
                  <i className="now-ui-icons users_single-02"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
            </nav>
        )
};

export default Header;
