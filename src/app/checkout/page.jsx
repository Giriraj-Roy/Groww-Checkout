'use client';
import usePaymentStore from "../stores/payment";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import {Button} from 'flowbite-react';

export default function Checkout() {
  const { paymentMethod, totalPrice } = usePaymentStore();
  const router = useRouter();
  const paymentStatuses = ['Pending', 'Completed', 'Failed'];

  const randomStatus = () => {
    const randomIndex = Math.floor(Math.random() * paymentStatuses.length);
    return paymentStatuses[randomIndex];
  }

  useEffect(() => {
    if(paymentMethod === '') {
      router.push('/');
      return null;
    }
  }, [])
  
  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold text-center m-3">Order Confirmed</h1>
      <h2>Payment Method: {paymentMethod}</h2>
      <h2>Total Price: ${totalPrice}</h2>
      <h2>Status: {randomStatus()}</h2>
      <div>Back to <a href="/"><Button color="blue" className="inline-block">Home</Button></a></div>
    </div>
  )
}
