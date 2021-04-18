// import React from 'react';



// const ContactDetail = ({contact}) => {
//     return (
//         <div className="col-md-4 text-centre ">
//          <img  className="img-fluid" src={contact.img} alt=""/> 
//            <h4>{contact.name}</h4>
//            <small>{contact.description}</small>   
//         </div>
//     );
// };

// export default ContactDetail;

import { Button, Card } from 'react-bootstrap';


const ContactDetail = (props) => {

  const {img, name,description} = props.contact;

  
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            {name}
         
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default ContactDetail;