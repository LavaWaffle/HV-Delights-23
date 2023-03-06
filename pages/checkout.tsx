import { useState } from "react"
import WidthLimiter from "../components/WidthLimiter"
import styles from "../styles/checkout.module.css"
import Image from "next/image"
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Delights } from "../types/contentfulTypes";
import json from "../data/delights.json"
import CheckoutCard from "../components/CheckoutCard";
import { formatCurrency } from "../utilities/formatCurrency";
import Router from "next/router";
export default function checkout() {
  const [deliveryOption, setDeliveryOption] = useState<"Pickup at HVCHS" | "Delivery">("Pickup at HVCHS");

  function handleDeliveryClick(deliveryState: "Pickup at HVCHS" | "Delivery") {
    setDeliveryOption(deliveryState);
  }

  const [payemtOption, setPaymentOption] = useState<"PayPal" | "Credit" | "GooglePay">("PayPal");
  const { cartItems, resetCart } = useShoppingCart();
  const delights = JSON.parse(json)
  
  const [animateOut, setAnimateOut] = useState<"animate__slide-out-left" | "animate__slide-in-right">("animate__slide-in-right");

  function handleOrder() {
    setAnimateOut("animate__slide-out-left")
    setTimeout(() => {
      resetCart()
      Router.push('/')
    }, 1000)
  }

  return (
    <section className={`bg-[#FDACAC] py-10 ${animateOut}`}>
      <WidthLimiter paddingAll={false} customPadding={true}>
        <div className="flex">

          {/* Left */}
          <div className="w-[60%] inline-flex flex-col space-y-10 justify-start grow-0 font-Lato border-r-2 border-white">
            {/* Delivery container */}
            <div className="flex flex-col space-y-3 text-center">
              {/* deliver label */}
              <label className={styles.label}>
                Delivery Method
              </label>
              {/* delivery buttons */}
              <div className="inline-flex flex-row justify-center space-x-7 mx-12">
                {/* PickUp button */}
                <button className={`${styles.btn} ${deliveryOption === "Pickup at HVCHS" ? styles.btnFocus : styles.btnNorm}`} onClick={() => handleDeliveryClick("Pickup at HVCHS")}>
                  Pickup at HVCHS
                </button>
                {/* Delivery button */}
                <button className={`${styles.btn} ${deliveryOption === "Delivery" ? styles.btnFocus : styles.btnNorm}`} onClick={() => handleDeliveryClick("Delivery")}>
                  Delivery
                </button>
              </div>
            </div>

            {/* Payment container */}
            <div className="flex flex-col space-y-5 text-center">
              {/* payment label */}
              <label className={styles.label}>
                Payment Method
              </label>
              {/* payment buttons */}
              <div className="inline-flex flex-row justify-center space-x-7 mx-12">
                {/* paypal button */}
                <button className={`${styles.btn} !py-[0.15rem] ${payemtOption === "PayPal" ? styles.btnFocus : styles.btnNorm}`} onClick={() => setPaymentOption("PayPal")}>
                  <div className="w-[7rem]">
                    <Image
                      src="/checkout/paypal.png"
                      width={172.44}
                      height={97}
                      layout="responsive"
                    />
                  </div>
                </button>
                {/* creditcard button */}
                <button className={`${styles.btn} !py-[0.15rem] ${payemtOption === "Credit" ? styles.btnFocus : styles.btnNorm}`} onClick={() => setPaymentOption("Credit")}>
                  <div className="w-[10rem]">
                    <Image
                      src="/checkout/creditCards.png"
                      width={266.37}
                      height={62}
                      layout="responsive"
                    />
                  </div>
                </button>
                {/* googlepay button */}
                <button className={`${styles.btn} !py-[0.15rem] ${payemtOption === "GooglePay" ? styles.btnFocus : styles.btnNorm}`} onClick={() => setPaymentOption("GooglePay")}>
                  <div className="w-[7rem]">
                    <Image
                      src="/checkout/googlepay.png"
                      width={129}
                      height={67.52}
                      layout="responsive"
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Payment data */}
            <div className="flex flex-col space-y-5 text-left">
              {/* Payment label */}
              <label className={`${styles.label} ml-[5rem]`}>
                Payment Information
              </label>
              {/* Payment Inputs */}
              <div className="inline-flex flex-col mx-[5rem] space-y-7">
                {payemtOption === "PayPal" && (
                  <>
                    <input className={styles.input} placeholder="Paypal Username" />
                    <input className={styles.input} placeholder="Paypal Password" />
                  </>
                )}
                {payemtOption === "Credit" && (
                  <>
                    <input className={styles.input} placeholder="Credit / Debit Number" />
                  </>
                )}
                {payemtOption === "GooglePay" && (
                  <>
                    <input className={styles.input} placeholder="Google Username" />
                    <input className={styles.input} placeholder="Google Password" />
                  </>
                )}

              </div>
            </div>

            {/* contact info */}
            <div className="flex flex-col space-y-5 text-left">
              {/* contact label */}
              <label className={`${styles.label} ml-[5rem]`}>
                Contact Information
              </label>
              {/* all inputs */}
              <div className="inline-flex flex-col mx-[5rem] space-y-7">
                <div className="flex flex-row justify-between space-x-2">
                  {/* First name input */}
                  <input className={styles.input} placeholder="First name" />

                  {/* Last name input */}
                  <input className={styles.input} placeholder="Last name" />
                </div>
                <input className={styles.input} placeholder="Email" />
                <input className={styles.input} placeholder="Phone Number" />
              </div>
            </div>

            {/* Shipping data */}
            {deliveryOption === "Delivery" &&
              <div className="flex flex-col space-y-5 text-left">
                {/* contact label */}
                <label className={`${styles.label} ml-[5rem]`}>
                  Shipping Address
                </label>
                {/* Shipping Inputs */}
                <div className="inline-flex flex-col mx-[5rem] space-y-7">
                  <div className="inline-flex flex-row justify-between">
                    {/* State input */}
                    <input className={styles.input} placeholder="State " />

                    {/* Zip Code input */}
                    <input className={styles.input} placeholder="Zip Code" />
                  </div>
                  {/* Address input */}
                  <input className={styles.input} placeholder="Address" />
                  <input className={styles.input} placeholder="Apartment, suite, etc. (optional)" />
                  <input className={styles.input} placeholder="City" />
                </div>
              </div>}




          </div>
          {/* right */}
          <div className="grow">
            {/* width limiter */}
            <div className="mx-3">
              {/* flex */}
              <div className="flex flex-col space-y-5 mt-4">
                {/* cart items */}
                {/* your order label */}
                <div className="flex flex-row justify-center">
                  <label className={`!font-Bold ${styles.label} ${styles.btn} ${styles.btnNorm} !py-2 !text-[#FF6565]`}>
                    Your Order
                  </label>
                </div>
                {/* Cart Items */}
                <div className="">
                  <div className=" flex-1 overflow-auto">
                    {/* White Color is temporary to show where delight will be */}
                    <div className="flex flex-col gap-5 m-2">
                      {cartItems.map((item, index) => {
                        const delightData = delights.find((delight: Delights) => delight.id === item.id)

                        return (
                          <CheckoutCard key={item.id} {...item} {...delightData} />)
                      })}
                    </div>
                  </div>
                </div>

                {/* confirm order */}
                <div className="border-t-4 border-white pt-[1rem] font-Lato font-medium">
                  <div className="bg-[#FFCACA] rounded-lg flex flex-col">
                    {/* subtotal and shipping */}
                    <div className="flex flex-col p-6">
                      {/* sub total */}
                      <div className="flex justify-between">
                        <span className="text-[#847B7B] text-[1.75rem]">Subtotal</span>
                        <span className="text-white text-[1.75rem]">{
                          formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = delights.find((delight: Delights) => delight.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity;
                          }, 0))
                        }</span>
                      </div>
                      {/* shippping */}
                      <div className="flex justify-between">
                        <span className="text-[#847B7B] text-[1.75rem]">Shipping</span>
                        <span className="text-white text-[1.75rem]">{
                          deliveryOption === "Delivery" ? formatCurrency(1.99) : formatCurrency(0)
                        }</span>
                      </div>
                      {/* total */}
                      <div className="flex justify-between border-t-2 border-[#878787] mt-2 pt-2">
                        <span className="text-[#847B7B] text-[1.75rem]">Total </span>
                        <span className="text-white text-[1.75rem]">{
                          formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = delights.find((delight: Delights) => delight.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity;
                          }, 0) + (deliveryOption === "Delivery" ? 1.99 : 0))
                        }</span>
                      </div>
                    </div>
                  </div>
                  {/* Confirm Order Btn */}
                  <div className="flex flex-row justify-center mt-8">
                    <button onClick={handleOrder} className={`${styles.btn} ${styles.btnFocus} !px-8 !text-3xl !py-3`}>
                      Confirm Order
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </WidthLimiter>
    </section >
  )
}