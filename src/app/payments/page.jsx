'use client';
import { Radio, Label, Button } from "flowbite-react";
import useCartStore from "../stores/cart";
import usePaymentStore from "../stores/payment";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Payments() {
  const router = useRouter();
  const { paymentMethods, cart } = useCartStore();
  const { setPaymentMethod, setPrice } = usePaymentStore();
  
  const [selectedMethod, setSelectedMethod] = useState('');
  
  useEffect(() => {
    if(cart.length === 0) {
      router.push('/');
      return null;
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
    router.push('/checkout');
  }
  var len = cart.length;
  return (
    
      (len === 0 )? 
        <div>
          Select Item to Proceed
        </div>
      :
      <div className='md:w-full md:h-[100vh] flex flex-col justify-center items-center font-semibold text-xl text-gray-600'>
          <h3 className="my-8">Preferred Payment Mode</h3>
          <div className='py-4 flex gap-4'>
            {paymentMethods.map((item, index) => (
              <div 
                  className="py-2 px-4 mx-2 min-w-[100%] md:min-w-[30%] text-center border-2 border-[#6f68f5] rounded-md hover:bg-[#6f68f5] hover:text-white"
                  // className="flex items-center gap-2"
                  key={index}
                  onClick={()=>{
                    setSelectedMethod(item)
                    console.log(selectedMethod)
  
                  }}
              >
                <Radio className="w-0 h-0" id="germany" name="method" value={item} 
                  // onClick={()=> setSelectedMethod(item)}
                />
                <Label htmlFor="germany">{item}</Label>
              </div>
            ))}
          </div>
          <Button className="w-fit bg-[#6f68f5]" onClick={()=> handleSubmit()}>Proceed</Button>
      </div>
    
    
  )
}
