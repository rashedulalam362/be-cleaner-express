// import React from 'react';

// import clean from '../../../images/cleaning-service.png'
// const Navbar = () => {
//     return (
//         <nav class="navbar navbar-expand-lg navbar-light ">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#"> <img src={clean} alt=""/>  </a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
//               </li>
              
//               <li class="nav-item">
//                 <a class="nav-link ms-5" href="#">Shortcodes</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link ms-5" href="#">Post Types</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link ms-5" href="#">Shop</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link ms-5" href="#">Contacts</a>
//               </li>
              
              
//             </ul>
            
//           </div>
//         </div>
//       </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import clean from '../../../images/cleaning-service.png'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand  as={Link} to="/"> <img src={clean} alt=""/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">services</Nav.Link>
                        <Nav.Link as={Link} to="/services">admin</Nav.Link>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;