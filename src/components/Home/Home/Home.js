import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
// import ContactInfo from '../ContactInfo/ContactInfo';
import FeaturedService from '../FeaturesService/FeaturesService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <ContactInfo/>
            <FeaturedService/>
            <Services/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;