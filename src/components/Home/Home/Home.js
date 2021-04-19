import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
// import ContactInfo from '../ContactInfo/ContactInfo';
import FeaturedService from '../FeaturesService/FeaturesService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Header/>
            <ContactInfo/>
            <FeaturedService/>
            <Services/>
            <Review/>
         
            <Footer/>
        </div>
    );
};

export default Home;