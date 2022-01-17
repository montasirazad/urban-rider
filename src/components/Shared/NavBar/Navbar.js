import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-lg navbar-light "  style={{ backgroundColor: "#000000" }}>
            <h1 className='ms-5 text-white'>URBAN RIDER</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ms-auto">
                    <li className="nav-item active me-3">
                    <Link to='/home'><button type="button" className="btn btn-outline-warning">HOME</button></Link>
                    </li>
                    <li className="nav-item me-3">
                    <Link to='/about'><button type="button" className="btn btn-outline-primary">ABOUT</button></Link>
                    </li>

                    <li className="nav-item me-3">
                    <Link to='/login'><button type="button" className="btn btn-outline-primary">LOG IN</button></Link>
                    </li>


                    <li className="nav-item me-3">
                    <Link to='/about'><button type="button" className="btn btn-outline-primary">CONTACT</button></Link>
                    </li>

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;