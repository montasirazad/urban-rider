import React from 'react';
import './RideChoice.css'
import bike from '../../images/Frame.png';
import bus from '../../images/Frame-1.png';
import car from '../../images/Frame-2.png';
import train from '../../images/Group.png';
import RideDetail from '../RideDetails/RideDetail';

const rideChoiceData = [
    {
        name: 'Bike',
        from: 'Khilgaon',
        to: 'Dhanmondi',
        person: 1,
        fare: 120,
        img: bike
    },
    {
        name: 'Bus',
        from: 'Khilgaon',
        to: 'Dhanmondi',
        person: 1,
        fare: 20,
        img: bus
    },
    {
        name: 'Car',
        from: 'Khilgaon',
        to: 'Dhanmondi',
        person: 4,
        fare: 320,
        img: car
    },
    {
        name: 'Train',
        from: 'shahbag',
        to: 'uttora',
        person: 1,
        fare: 120,
        img: train
    }

]

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