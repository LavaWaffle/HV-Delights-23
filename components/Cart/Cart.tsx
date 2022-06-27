import { CloseButton } from '@mantine/core';
import Link from 'next/link';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import styles from './cart.module.css';
import CartItem from './CartItem';
import { useEffect } from 'react';
import json  from "../../data/delights.json"
import { Delights } from '../../types/contentfulTypes';
import { formatCurrency } from '../../utilities/formatCurrency';

export default function Cart(closeCart: any) {
  const { cartItems } = useShoppingCart();
	const delights = JSON.parse(json)
	// delights.map((delight: any) => console.log(delight))
  return (
    <>
      <div className="opacity-40 z-[190]">
        <div className="animate-fade-in h-screen fixed w-full bg-[#DFDFDF]"></div>
      </div>
      <div className="animate-slide-right w-full h-screen fixed z-[200] flex flex-row justify-end">
        {/* Blur effect on left side */}
        <button
          className={`hidden sm:block flex-1 h-screen`}
          onClick={closeCart.closeCart}
        ></button>
        {/* cart Screen */}
        <div className="shadow-2xl w-[100%] sm:w-[500px] flex flex-col items-stretch opacity-100 text-white">
          <div className="bg-[#FDACAC] flex flex-row pl-6 items-center justify-between">
            {/* Top */}
            <div className="font-Oswald text-4xl align font-extralight uppercase tracking-[.15em]  py-4">
              Your Cart
            </div>
            {/* Close X button */}
            <button className="w-16 mr-4" onClick={closeCart.closeCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Food delights */}
          <div className="bg-[#FfCACA] flex-1 overflow-auto">
            {/* White Color is temporary to show where delight will be */}
            <div className="flex flex-col gap-5 m-2">
              {cartItems.map((item, index) => {
                const delightData = delights.find((delight: Delights) => delight.id === item.id)
								
								return (
								<CartItem key={item.id} {...item} {...delightData} />)
							})}
            </div>
          </div>
          {/* Bottom Subtotal, checkout, etc */}
          <div className="bg-[#FDACAC] flex flex-col py-[22px] gap-4 px-6">
            <div className="flex flex-row justify-between text-2xl tracking-[.20em]">
              <div className="uppercase ">Subtotal</div>
              <div className="uppercase ">{
                formatCurrency(cartItems.reduce((total, cartItem) => {
                  const item = delights.find((delight: Delights) => delight.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0))
              }</div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/checkout">
                <a onClick={closeCart.closeCart} className="bg-[#FD7676] py-[10px]">
                  <div className="flex flex-row justify-center items-center gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-xl tracking-[.20em] uppercase font-normal">Checkout</div>
                  </div>
                </a>
              </Link>
              <div className="flex flex-row justify-center">
                <div className="font-Lato text-sm font-normal tracking-[.05em]">
                  Orders will be processed in USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
