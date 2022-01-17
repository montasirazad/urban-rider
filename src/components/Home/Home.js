import React from 'react';
import RideChoice from '../RideChoice/RideChoice';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/NavBar/Navbar';
import './home.css'

const Home = () => {
    return (

        <div className='d-flex flex-wrap row justify-content-center home'>
            <header>
                <Navbar />
            </header>
            <section className=' main-container' >

                <RideChoice />
                
            </section>
            {/* <Footer /> */}
        </div>


    );
};

export default Home;