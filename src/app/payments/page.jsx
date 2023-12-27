'use client';
import { Radio, Label, Button } from "flowbite-react";
import useCartStore from "../stores/cart";
import usePaymentStore from "../stores/payment";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Payments() {
  const router = useRouter();
  const { paymentMethods, cart } = useCartStore();
  const { setPaymentMethod, setPrice } = usePaymentStore();
  
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedID, setSelectedID] = useState(-1);
  const [active, setActive] = useState('-');

  

  
  useEffect(() => {
    if(cart.length === 0) {
      router.push('/');
      // return null;
    }
  }, [])

  const handleSubmit = () => {
    if(selectedMethod === '') {
      alert('Please select a payment method');
      return ;
    }
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    console.log(totalPrice);
    setPrice(totalPrice);
    setPaymentMethod(selectedMethod);
    console.log(selectedMethod)
    router.push('/checkout');
  }
  var len = cart.length;
  return (
      <div className='md:w-full h-[100vh] relative flex flex-col justify-center items-center font-semibold text-xl text-gray-600'>
          <Link href='/' className="absolute top-2 left-2 cursor-pointer text-sm font-bold text-black">
            {'<--'} Change Orders
          </Link>
          <h3 className="mt-10 mb-10 md:my-8">Preferred Payment Mode</h3>
          <div className='py-4 w-[90%] md:w-auto flex flex-col items-center justify-center md:flex md:flex-row md:gap-4'>
            {paymentMethods.map((item, index) => (
              <div 
                  className={`py-2 px-4 my-2 mx-2 min-w-[100%] md:w-[30%] cursor-pointer text-center border-2 font-medium text-black border-[#6f68f5] rounded-md  hover:bg-[#6f68f5] hover:text-white
                  ${selectedID!==-1 && item===selectedMethod? "bg-[#4b41ff] hover:bg-[#342eb1] text-white animate-bounce": "bg-white"}
                  `}
                  key={index}
                  onClick={()=>{
                    setSelectedID(item.id)
                    return setSelectedMethod(item)
                  }}
              >
                <Label className="text-inherit cursor-pointer">{item}</Label>
              </div>
            ))}
          </div>
          <Button className="w-fit bg-[#6f68f5]" onClick={()=> handleSubmit()}>Proceed</Button>
      </div>
    
    
  )
}
