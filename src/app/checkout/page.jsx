'use client';
import usePaymentStore from "../stores/payment";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import {Button} from 'flowbite-react';

export default function Checkout() {
  const { paymentMethod, totalPrice } = usePaymentStore();
  const router = useRouter();
  const paymentStatuses = ['Pending', 'Success', 'Failure'];

  const randomStatus = () => {
    const randomIndex = Math.floor(Math.random() * paymentStatuses.length);
    return paymentStatuses[randomIndex];
  }

  useEffect(() => {
    if(paymentMethod === '') {
      router.push('/');
      // return null;
    }
  }, [])
  let order_status;
  
  return (
    <div className="py-4 px-1 flex flex-col items-center">
      <h1 className="text-green-500 text-2xl font-bold text-center m-3">Order Status ! </h1>
      <div className="w-[100%] h-[80vh] flex flex-col items-center justify-center">
        <div className="my-4 py-2 px-4 w-[75%] lg:w-[20%] flex justify-between border-2 hover:border-[#6f68f5] rounded-lg font-semibold text-center text-gray-600">
          Payment Method: 
          <span className="">{paymentMethod}</span>
        </div>
        <div className="my-4 py-2 px-4 w-[75%] lg:w-[20%] flex justify-between border-2 hover:border-[#6f68f5] rounded-lg font-semibold text-center text-gray-600">
          Total Price :  
          <span className="">$ {totalPrice}</span>
        </div>
        <div className="my-4 py-2 px-4 w-[75%] lg:w-[20%] flex justify-between border-2 hover:border-[#6f68f5] rounded-lg font-semibold text-center text-gray-600">
          Status : 
          <span className="">{randomStatus()}</span>
        </div>
      </div>

      <div className="text-black">
        Back to 
        <a href="/">
          <Button className="mx-3 p-0 rounded-md inline-block bg-[#6f68f5]">
            Home
          </Button>
        </a>
      </div>
    </div>
  )
}
