import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CheckOrder = () => {
    const {serviceId} = useParams();
    
    const [serviceData, setServiceData] = useState({});
   
    useEffect(() => {
        fetch(`http://localhost:5055/service/${serviceId}   `)
        .then(res => res.json())
        .then(data =>setServiceData(data[0]));
     
     }, [serviceId])
   

    
     
      
    return (
        <div>
          <Table striped bordered hover size="sm">
  <thead>
    <tr>
     
    <th> Name:</th>
      <th>Service name:</th>
    
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
     
      <td>{serviceData.name}</td>
      <td>{serviceData.price}</td>
      
    
    </tr>
   
  
  </tbody>
</Table>
       <Link to='/OrderList' >OrderPlace</Link>     
        </div>
    );
};

export default CheckOrder;