import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/NavBar/Navbar';
import './Ride.css'

const Ride = () => {
   const {ride} = useParams()
    return (
        <div className='ride'>
            <Navbar/>
            <h1>you selected {ride}</h1>
        </div>
    );
};

export default Ride;