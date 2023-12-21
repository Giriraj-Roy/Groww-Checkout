'use client';
import useCartStore from "../stores/cart"
import { useEffect } from "react";
import { Card, Button } from 'flowbite-react';
import Link from 'next/link';

export default function DashboardClient({ data }) {
    const { fetchData, cart, paymentMethods } = useCartStore();
    useEffect(() => {
        fetchData(data);
    }, [data]);

    const address = "14 XYZ Street, ABC"
    // console.log(cart);

    return (
        <>
        <div>
            <div className="my-2 w-full text-center text-2xl text-gray-500 font-bold">Checkout</div>
            <div className="my-2 justify-start text-xl text-gray-500 font-semibold">Delivery Details</div>
            <div className="my-2 px-2 py-1 bg-[#acababab] rounded-[0.2rem] w-fit text-sm text-gray-500">{address}</div>
            <div className="my-2 text-align-left-1 font-semibold text-lg text-black">Order List</div>
        </div>
        <div className="my-4 flex justify-between flex-wrap px-6 py-4 border-2 rounded-xl max-h-[55vh] md:max-h-[40vh] no-scrollbar overflow-y-auto w-[90%]">

            { cart.length===0 ? 
                <div className="h-[32vh] py-4 px-2">
                    <h2 className="text-3xl font-bold text-black">
                        Your Cart is Empty
                    </h2>
                    <span className="text-lg text-black">
                        Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
                    </span>
                    
                </div>

            :

            cart.map((item) => (
                <Card
                    key={item.id}
                    horizontal
                    className="flex px-2 my-2 max-w-xs min-w-[5rem]"
                    renderImage={() => <img src={item.image} className="m-auto object-contain h-20" alt={item.title} loading="lazy" />}
                >
                    <div className="h-full flex flex-col">
                        <div className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                        </div>
                        <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <div className="mt-1 text-sm font-semibold tracking-wider text-gray-600 dark:text-white">
                            Price : ${item.price}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
        <div className="my-4 font-semibold text-gray-600">
            <h2>Payment Methods Available</h2>
            <ul className="flex mt-2 w-[25%]">
                {paymentMethods.map((item, index) => (
                    <li className="py-2 px-4 mx-2 min-w-[100%] md:min-w-[30%] text-center border-2 border-[#6f68f5] rounded-md hover:bg-[#6f68f5] hover:text-white"
                        key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        {cart.length === 0 ? 
            <Button className="my-6 w-fit bg-[#6f68f5]">Add Items To Cart</Button>
        :
            <Link className="my-6 w-fit" href="/payments">
                <Button className="bg-[#6f68f5]">Checkout to Select Payment option</Button>
            </Link>
        }
        </>
    )
}
