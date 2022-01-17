import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/NavBar/Navbar';
import './Ride.css'
import map from '../../images/Map.png'

const Ride = () => {
    const { ride } = useParams()
    return (
        <div>
            <Navbar />
            

            <div className='d-flex row justify-content-center main'>
                <div className='col-md-4'>
                    <p>Pick from:</p>
                    <input className='form-control' type="text" /> <br />
                    <p>Pick to:</p>
                    <input  className='form-control' type="text" /> <br /> 
                    <button className='btn btn-primary'>Confirm </button>
                </div>

                <div className='map col-md-5'>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Ride;