

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceDetail.css'
const ServiceDetail = (props) => {

  const {_id,name,description,price, imageURL} = props.service;

  const history = useHistory()
  const handleService = (_id) => {
 
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