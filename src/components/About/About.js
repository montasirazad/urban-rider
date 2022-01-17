import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faCopyright } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div style={{textAlign:'center',marginTop:'150px'}}>
            <h5><FontAwesomeIcon style={{color:'red'}} icon={faRegistered} /> Urban Riders</h5>
            <h5><FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} All right received</h5>

        </div>
    );
};

export default About;