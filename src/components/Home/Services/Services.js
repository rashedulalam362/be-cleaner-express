import React, { useEffect, useState } from 'react';
import houseclenaer from '../../../images/housecleaner.jpg'
import maidservicer from '../../../images/maidservice.jpg'
import officecleaner from '../../../images/officecleaner.jpg'
import windowcleaner from '../../../images/windowcleaner.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
// const serviceInfoData=[
//     {
//       serviceId:1,
//       name:'Hose Cleaning ',
//       img:houseclenaer,
//       description: 'Womens, mens and childrens fashion, accesories, shoes, jewellery and more are in the Fashion Zone' 
//     },
//     {
//       serviceId:2,
//       name:'Maid Service',
//       img:maidservicer,
//       description:'Womens, mens and childrens fashion, accesories, shoes, jewellery and more are in the Fashion Zone ',
//     },
//     {
//       serviceId:3,
//       name:'Office Cleaner ',
//       img:officecleaner,
//       description:'Womens, mens and childrens fashion, accesories, shoes, jewellery and more are in the Fashion Zone  '
//     },
//     {
//       id:3, 
//       name:'windowcleaner  ',
//         img:windowcleaner,
//         description:'Womens mens and childrens fashion, accesories, shoes, jewellery and more are in the Fashion Zone '
//       },
      
    
    
    
//     ]


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