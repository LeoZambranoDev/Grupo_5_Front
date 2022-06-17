import React from 'react';
import image from '../assets/images/header-logo.png';
// import ContentWrapper from './ContentWrapper';
// import GenresInDb from './GenresInDb';
// import LastMovieInDb from './LastMovieInDb';
// import ContentRow from './ContentRow';
// import NotFound from './NotFound';
import {Link } from 'react-router-dom';
// import SearchMovies from './SearchMovies';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/BrandsInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Marcas</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Listado de productos</span></Link>
                </li>

              
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}


            
        </React.Fragment>
    )
}
export default SideBar;