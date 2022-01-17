import React from 'react';
import { Link } from 'react-router-dom';
import './rider-details.css'
const RideDetail = (props) => {

    const { name, from, to, person, fare, img } = props.ride

    return (
        <div className="card d-flex rider-details" style={{width:'150px',padding:'30pX',margin:'15px'}}>
            <img className="card-img-top img-fluid" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <Link style={{color:'#000000', textDecoration:'none'}} to={`/${name}`}><h5 className="text-center">{name}</h5></Link>
                </div>
        </div>
    );
};

export default RideDetail;