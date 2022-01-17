import React from 'react';
import { useNavigate } from 'react-router-dom';
import map from '../../images/Map.png';
import fakeData from '../FakeData/FakeData';
import Navbar from '../Shared/NavBar/Navbar';
import './Ride.css';



const Ride = () => {
    const navigate = useNavigate()
    const confirmRide = () => {
        navigate('/confirmRide')
    }
    return (
        <div>
            <Navbar />


            <div className='d-flex row justify-content-center main'>
                <div className='col-md-4'>
                    <p>Pick from:</p>
                    <input className='form-control' type="text" defaultValue={fakeData[0].from} /> <br />
                    <p>Pick to:</p>
                    <input className='form-control' type="text" defaultValue={fakeData[0].to} /> <br />
                    <button className='btn btn-primary' onClick={confirmRide}>Search </button>
                </div>

                <div className='map col-md-5'>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Ride;