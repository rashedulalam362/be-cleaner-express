import React from 'react';
import dentist from '../../../images/banner.jepg (1).jpeg';
const FeaturedService = () => {
    return (
        <div className="feature-service pb-md-5 my-5">
           <div className="container mb-5">
         <div className="row mb-5">
          <div className="col-md-5">
            <img style={{height:'400px ',width:'400px ',}} className="img-fluid" src={dentist} alt=""/>  
            
          </div>

           <div className="col-md-7">
           <h1>Exceptional service from our Term</h1>
            <p className="text-secondary my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum obcaecati similique vel autem corporis sapiente consequatur quo perspiciatis aut!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum obcaecati similique vel autem corporis sapiente consequatur quo perspiciatis aut!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum obcaecati similique vel autem corporis sapiente consequatur quo perspiciatis aut!</p>  
            <button className="btn btn-primary">Learn More</button>
          </div>    
             
             
             </div>      
               
               
               
        </div> 
            
        </div>
    );
};

export default FeaturedService;