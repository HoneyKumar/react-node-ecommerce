import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () =>{
    return (
        <div className="sidebar" data-color="orange">
        {/*
          Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
      */}
        <div className="logo">

        </div>
        <div className="sidebar-wrapper" id="sidebar-wrapper">
          <ul className="nav">
            <li className="active ">
              <Link to="/dashboard">
                <i className="now-ui-icons design_app"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <i className="now-ui-icons education_atom"></i>
                <p>Products</p>
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <i className="now-ui-icons location_map-big"></i>
                <p>Orders</p>
              </Link>
            </li>
            <li>
             
            </li>
            <li>
              <Link to="/user-profile">
                <i className="now-ui-icons users_single-02"></i>
                <p>User Profile</p>
              </Link>
            </li>
            <li>
              <Link to="/customers">
                <i className="now-ui-icons design_bullet-list-67"></i>
                <p>Customer List</p>
              </Link>
            </li>


          </ul>
        </div>
      </div>
    )
};

export default SideBar;
