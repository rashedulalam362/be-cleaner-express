// import React from 'react';
// import { Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// const ServiceDetail = ({service}) => {
    
//     return (
//     //     <div classNameNameName="col-md-4 text-centre">
//     //     <img classNameNameName="img-fluid" src={service.img} alt=""/> 
//     //     <p>{service.name}</p>
//     //     <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, aut!</small>
//     //    <button classNameNameName="btn btn-primary">See more</button>
//     //  </div>
//     <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={service.img} />
//   <Card.Body>
//     <Card.Title>{service.name}</Card.Title>
//     <Card.Text>
//       {service.description}
//     </Card.Text>
//     <Button variant="primary" >buy now</Button>
//   </Card.Body>
// </Card>
   
//     );
// };

// export default ServiceDetail;

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServiceDetail = (props) => {

  const {_id,name,description,price, imageURL} = props.service;

  const history = useHistory()
  const handleService = (_id) => {
 ;
      history.push(`/service/${_id}`);
  }
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{props.service.name}</Card.Title>
          <Card.Text>
            {description}
            {name}
            {price}
          </Card.Text>
          <Button onClick={() => handleService(_id)} variant="primary">buy now service</Button>
        </Card.Body>
      </Card>
    );
};

export default ServiceDetail;