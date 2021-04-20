import React from 'react';
import AddOrder from '../AddOrder/AddOrder';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Orderlist = () => {

    return (
        <div className="row container mx-auto">
            <div className="col-md-6">
             <AddOrder/>
            </div>
            <div className="col-md-6">
                <h4>please proceed for pay</h4>
                <ProcessPayment/>
            </div>
        </div>
    );
};

export default Orderlist;