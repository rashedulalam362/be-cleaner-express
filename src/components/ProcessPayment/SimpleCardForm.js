import React, { useContext } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { OrderContext } from '../../App';
import { Link } from 'react-router-dom';

const SimpleCardPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [order, setOrder]=useContext(OrderContext)
  const newOrder={
    name:order.name,
    email:order.email

  }
  const handleSubmit = async (event) => {
   

    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
    

      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      console.log(order.name);
      fetch("http://localhost:5055/addList",{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newOrder)
      })
    
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        <Link to='/List'>Pay Now</Link>
      </button>
    </form>
  );
};

export default SimpleCardPayment;