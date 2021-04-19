import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardPayment from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IhqQlEaWhkEQUWnVaPyhj9hyKb5iTiepi1Hfo21E6OJ6Png3RNCZlymaIHbrvp1MqVWxsvu6TH9EuLrG8Y52peF007yIubHS7');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
        <SimpleCardPayment/>
    </Elements>
    );
};

export default ProcessPayment;