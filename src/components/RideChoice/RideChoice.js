import React from 'react';
import rideChoiceData from '../FakeData/FakeData';
import RideDetail from '../RideDetails/RideDetail';
import './RideChoice.css';

 

const RideChoice = () => {
    return (
        <div className='d-flex flex-wrap row justify-content-center col ride-choice'>
            {
                rideChoiceData.map(ride => <RideDetail key={ride.name} ride={ride} ></RideDetail>)
            }
        </div>
    );
};

export default RideChoice;