import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import urbanRider from '../../../images/Urban Riders.png';
import './NavBar.css';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);

    const handleLogOut = () => {
        const loggedOutUser = {
            name: '',
            email: '',
            image: '',
            isLoggedIn: false
        }
        setUser(loggedOutUser);

    }
    return (
        <nav className="navbar  navbar-expand-lg navbar-light " >
            <img className='nav-img' src={urbanRider} alt="" />

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
                        <Link to='/about'><button type="button" className="btn btn-outline-primary">CONTACT</button></Link>
                    </li>

                    {
                        user.email ? <li className="nav-item me-3">
                            <Link to='/home'><button type="button" className="btn btn-outline-primary" onClick={handleLogOut}>LOG OUT</button></Link>
                        </li> : <li className="nav-item me-3">
                            <Link to='/login'><button type="button" className="btn btn-outline-primary">LOG In</button></Link>
                        </li>
                    }

                    {
                        user.email ? <img style={{width:'50px',marginRight:'10px'}} src={user.image} alt="" /> : null
                    }

                    {
                        user.email ? <p style={{marginRight:'10px'}}> welcome,{user.name}</p>  : null
                    }

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;