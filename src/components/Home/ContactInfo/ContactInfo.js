import React from 'react';
import contact from '../../../images/contanct.png.jpg'
import premium from '../../../images/premium.png.png'
import welcome from '../../../images/cleanerwomen.jpg'
import ContactDetail from '../ContactDetail/ContactDetail';
import './contactInfo.css'
const contactData=[
    {
        img: contact,
        name:'Contact us to book a term Treatment',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis.'
    },
    {
        img:welcome, 
        name:'Welcome our cleaning girl ',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis.'
    },
    {
      img:premium,  
      name:'Enjoy the premium service ',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis.'
    },
    
    
    
    
    ]
// const ContactInfo = () => {
//     return (
//         <section className="contact-container  ">
     
     
      
//           <h1>How We Work</h1>
      
    

       
//          <div className=" row mb-5">
//          {
//           contactData.map(contact=><ContactDetail contact={contact}></ContactDetail>)  
//          }  
//          </div>
  
//       </section>
//     );
// };

// export default ContactInfo;

const ContactInfo = () => {
  return (
      <section className="service-container ">
        <div className="div">
        <div className="text-centre">
          <h5>Our Services </h5>
          <h1>Services we provides</h1>
        </div>

    
         <div className=" row  ">
         {
        contactData.map(contact=><ContactDetail contact={contact}></ContactDetail>)   
         }  
         </div>
        </div>
   
      </section>
  );
};

export default ContactInfo;