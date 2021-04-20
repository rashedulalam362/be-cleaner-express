import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { OrderContext, UserContext } from '../../App';

// import Button from 'react-bootstrap/Button';

const AddOrder = () => {
  const[orders, setOrders]=useState([]);
  const [loggedInUser, setLoggedInUser]=useContext(UserContext)
  const [order, setOrder]=useContext(OrderContext)
  console.log(order);
  const [ImageURL,setImageURL]=useState([]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  
  const onSubmit = data => {
    console.log(data);
  
    const orderDetail={
    name:data.service,
    
    price:data.price
   
   

    };
    const url=`http://localhost:5055/addOrder`;
   console.log(orderDetail);
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(orderDetail)
    })
    .then(res=>{
      console.log('server side respond ',res);
    })
  };
  
  const handleImageUpload=event=>{
  console.log(event.target.files[0]);
  const imageData=new FormData();
  imageData.set('key','f55bee829750295813db4effab2d9b8f')
  imageData.append('image',event.target.files[0])
  axios.post('https://api.imgbb.com/1/upload', 
  imageData
  )
  .then(function (response) {
    setImageURL(response.data.data.display_url);
  })
  .catch(function (error) {
    console.log(error);
  });



  }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     
     <input name="name " defaultValue={loggedInUser.name} {...register("email")} /><br/>
      <input name="email " defaultValue={loggedInUser.email} {...register("service")} /><br/>
      <input name="order " defaultValue={order.name} {...register("order")} /><br/>
      
      
      
    
    </form>
   
  );

  
};

export default AddOrder;