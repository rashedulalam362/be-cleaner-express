import React from 'react';
import banner from '../../../images/banner.jepg (1).jpeg'
const HeaderMain = () => {
    return (
      //   <main style={{height:'500px'}} className="row d-flex align-items-center">
      //   <div className="col-md-4 offset-md-1">
      //      <h3 style={{color:"#3A4256"}}>We clean home</h3> <br/>
      //      <h4>Professional Service</h4>
      //      <h4>Fair Price</h4>
      //      <p className="tex-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta quisquam vitae at i </p>
      //      <button className="btn btn-primary">Learn more </button>
      //      <button type="button" class="btn btn-outline-secondary ms-2">Quick quote</button>
      //   </div>  
        
      //   <div className="col-md-6">
      //  <img src={banner} alt="" className="img-fluid"/>
         
      //   </div>
          
      // </main>

      <div className="section">
      <div className="row d-flex align-items-center">
      <div className="col-md-6">
      <h3>We clean home</h3> <br/>
         <h4>Professional Service</h4>
           <h4>Fair Price</h4>
        </div>
        <div className="col-md-6">
          <img src={banner} alt=""/>
          </div>


      </div>

      </div>
    );
};

export default HeaderMain;