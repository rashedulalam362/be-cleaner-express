import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';



const Review = () => {
  const [reviews, setReviews]=useState([])
  useEffect(()=>{ 
    fetch('http://localhost:5055/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  
    },[])
    return (
       <section className="service-container ">
          <div className="text-centre">
            <h5>Our Customers Say </h5>
            <h1>Testimonials</h1>
          </div>
          
         
          
          <div className="container my-5 ">
          <div className="row"  >
        {
             reviews.map(review=><ReviewDetails review={review}  ></ReviewDetails>)
          
          }
          </div>
           
          
        </div>
       



        </section>
    );
};

export default Review;