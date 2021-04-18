import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

// import Button from 'react-bootstrap/Button';

const AddService = () => {
  const[services, setServices]=useState([])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL,setImageURL]=useState(null)
  
  const onSubmit = data => {
    console.log(data);
    const eventData={
    name:data.service,
   imageURL:imageURL,
    price:data.price
   

    };
    const url=`http://localhost:5055/addService`;
   console.log(eventData);
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(eventData)
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
  // const deleteBook=id=>{
  //   console.log(id);

  // }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <input name="service" defaultValue="service" {...register("service")} /><br/>
      <input name="price"  defaultValue="price" {...register("price")} /><br/>
      
      <input {...register("exampleRequired", { required: true })} type="file" onChange={handleImageUpload} /><br/>
      
      
      
      <input type="submit" /><br/>
      {/* <button onClick={()=>deleteBook(books._id)} >deleteBtn</button> */}
    </form>
   
  );

  
};

export default AddService;