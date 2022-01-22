import React from 'react';

import { Link } from "react-router-dom";

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                <Link to="/" className="nav-link" >
                     
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - APOLO</span>
                        </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link to="/lastMovie" className="nav-link collapsed" >
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Last Movie In Db</span>
                </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                <Link to="/product" className="nav-link" >
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Products</span>
                        </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                <Link to="/countBySecction" className="nav-link" >
                     
                        <i className="fas fa-fw fa-table"></i>
                        <span>Count Total By Secction</span>
                        </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;