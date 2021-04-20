import React, { useEffect, useState } from 'react';

import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
  const [services, setServices]=useState([])
  useEffect(()=>{ 
    fetch('http://localhost:5055/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
  
    },[])
    return (
       <section className="service-container ">
          <div className="text-centre">
            <h5>We make life easier </h5>
            <h1>What We Offer</h1>
          </div>
          
         
          
          <div className="container my-5 ">
          <div className="row"  >
           {/* {
            serviceInfoData.map(service=><ServiceDetail key={service.id} service={service}></ServiceDetail>)   
           } */}
           {
             services.map(service=><ServiceDetail service={service} key={service.serviceId} ></ServiceDetail>)
           }
          </div>
           
          
        </div>
       



        </section>
    );
};

export default Services;