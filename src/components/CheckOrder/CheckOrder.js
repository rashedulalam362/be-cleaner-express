import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { OrderContext } from '../../App';

const CheckOrder = () => {
    const {serviceId} = useParams();
    
    const [serviceData, setServiceData] = useState({});
    const [order, setOrder]=useContext(OrderContext)

    useEffect(() => {
        fetch(`https://serene-meadow-06584.herokuapp.com/service/${serviceId}   `)
        .then(res => res.json())
        .then(data => {setServiceData(data[0]) 
          setOrder(data[0])
        });
     
     }, [serviceId])

     console.log(order);
   

    
     
      
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