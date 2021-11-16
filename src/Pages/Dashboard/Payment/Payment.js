import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jvm3dLOl7vYxxRRNtqNGJqQK1f5x04c8IPdlHSbh73CgALlEttn5031B5oGfxABVd8PgDXiY5uDojZFR4itchwI00lE8Laikj');

const Payment = () => {
    const {appointmentId}=useParams()
    const [appointment,setAppointment] =useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/appointments/${appointmentId}`).then(res=>setAppointment(res.data))
    },[appointmentId])
    return (
        <div>
            <h2>Please Order for :{appointment.patientName} </h2>
            <Elements stripe={stripePromise}>
      <CheckoutForm appointment={appointment} />
    </Elements>
        </div>
    );
};

export default Payment;