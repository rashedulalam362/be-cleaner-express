

import React from 'react';
import { Card } from 'react-bootstrap';



const ReviewDetails = (props) => {

  const {name,description,price, imageURL} = props.review;

  
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{props.review.name}</Card.Title>
          <Card.Text>
            {description}
            {name}
            {price}
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
};

export default ReviewDetails;