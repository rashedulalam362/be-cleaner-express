import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Orderlist = () => {
    return (
        <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6">
                <h4>please proceed for pay</h4>
                <ProcessPayment/>
            </div>
        </div>
    );
};

export default Orderlist;