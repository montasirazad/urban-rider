import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMapPin, faUser, faMoneyBill, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import fakeData from '../FakeData/FakeData';
import Navbar from '../Shared/NavBar/Navbar';
import map from '../../images/Map.png';
import './ConfirmRide.css'
import { useNavigate } from 'react-router-dom';


const ConfirmRide = () => {

    const navigate = useNavigate();

    const handleBackButton = () =>{
         navigate('/home')
    }
    return (
        <div>
            <Navbar />


            <div className='d-flex row justify-content-center main'>
                <div className='col-md-4'>
                    <h4>Your Ride Summery</h4>
                    <p>Pick from:</p>
                    <h4><FontAwesomeIcon id='map-marker' icon={faMapMarker} /> {fakeData[0].from}</h4>
                    <p>Destination:</p>
                    <h4> <FontAwesomeIcon id='pin' icon={faMapPin} /> {fakeData[0].to}</h4> <br />
                    <h4> <FontAwesomeIcon id='user' icon={faUser} /> 1 person </h4> <br />
                    <h4> <FontAwesomeIcon icon={faMoneyBill} /> 100 BDT </h4> <br />
                    <button onClick={handleBackButton} className='btn btn-primary'> <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back To Home</button>


                </div>

                <div className='map col-md-5'>
                    <img src={map} alt="" />
                </div>
            </div>


        </div>
    );
};

export default ConfirmRide;