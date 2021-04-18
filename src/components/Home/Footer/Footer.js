import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import Footershow from '../Footershow/Footershow';

const Footer = () => {
    const companyInfo = [
        {name: "About Company" , link: "/AboutCompany"},
        {name: "Advice & Tips" , link:  "/Advice"},
        {name: "Our Team" , link: "/team"},
        {name: "our Patners" , link: "/Patners"},
        
    ]
    const ourAddress = [
        {name: "California - 101010 Hitspot" , link: "//google.com/map"},
        {name: "" , link: "//google.com/map"},
       
    ]

    const services = [
        {name: "Maid Services " , link: "/maidservice"},
        {name: "Window Cleaning" , link: "/WindowCleaning"},
        {name: "Office Cleaning" , link: "/OfficeCleaning"},
        {name: "Domestic Cleaning" , link: "/DomesticCleaning"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <Footershow key={1} menuTitle={"."} menuItems={companyInfo}/>
                    <Footershow key={2} menuTitle="Services" menuItems={services}/>
                    {/* <Footershow key={3} menuTitle="Oral Health" menuItems={oralHealth}/> */}
                    <Footershow key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookMessenger} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+314225555</button>
                        </div>
                    </Footershow>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;