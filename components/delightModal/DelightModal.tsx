import { useState } from 'react';
import { formatCurrency } from "../../utilities/formatCurrency";

export default function DelightModal(productDetailProps: any) {
  
  const props = productDetailProps.productDetailProps;
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(props.price)
  const basePrice = props.price;


  function handleAdd() {
      const counter = quantity + 1;
      setQuantity(counter)
      setPrice(basePrice * counter)
  }
  function handleRemove() {
      const counter = quantity - 1;
      if (counter >= 1) {
          setQuantity(counter)
          setPrice(basePrice * counter)
      }
  }
  function handleAddToCart() {
    // ADD ADDTOCART FUNCTION
    console.log(quantity, price, props.title, props.imagePath)
    // props.addToCart()
    handleClose()
  }

  function handleClose() {
    productDetailProps.closeCart()
  }
  return (
      <>
          <div className='h-screen w-screen fixed z-[150]'>
              <div className='opacity-30'>
                  <button className='animate-fade-in absolute top-[-100px] w-full h-full bg-[#DFDFDF] ' onClick={handleClose}>
                  </button>
              </div>
          </div>
          <div className='animate-slide-in-fwd-right fixed h-screen w-screen flex flex-row  justify-center items-center  z-[200]'>
              <div className='relative'>
                  <div className='absolute top-[-100px] transform -translate-x-[50%] -translate-y-[50%] w-screen sm:w-[500px] md:w-[600px] lg:w-[900px] bg-[#FFCACA] rounded-2xl px-8 pb-6 pt-8'>
                      <div className='relative flex flex-row justify-end'>
                          <div className='absolute top-[-.4rem]'>
                              <button className="w-10 text-white" onClick={handleClose}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                              </button>
                          </div>
                      </div>
                      {/* flex */}
                      <div className='flex flex-row justify-between'>
                          {/* left  */}
                          <div className='flex flex-col w-[60%] gap-8'>
                              <div className='flex flex-col text-white gap-4'>
                                  <div className='font-Inter font-semibold text-2xl'>
                                      {props.title}
                                  </div>
                                  <div className=' font-Inter font-light text-base w-[85%]'>
                                      {props.description}
                                  </div>
                              </div>
                              <div className='flex flex-col gap-10'>
                                  <div className='text-[#FAFAFA] font-Rubik font-medium w-[80%]'>
                                      Ingredients: {props.ingredients}
                                  </div>
                                  <div className='flex flex-col gap-4'>
                                      <div className='text-[#FAFAFA] font-Rubik font-medium   '>
                                          Product Facts:
                                      </div>
                                      <div className='text-white font-Inter font-bold text-sm'>
                                          {props.productFacts}
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* right */}
                          <div className='flex flex-col gap-7 w-[33%] justify-center'>
                              <div className='flex flex-col gap-2'>
                                  <div className='flex flex-col gap-5 pt-10'>
                                      <div className='font-Rubik font-medium text-xl text-[#FAFAFA]'>
                                          Quantity
                                      </div>
                                      <div className='flex flex-row items-center gap-5'>
                                          <button className='bg-[#F49595] rounded-lg text-white text-3xl font-Inter font-light w-[3rem] h-[3.5rem] flex justify-center items-center pb-1' onClick={handleRemove}>
                                              -
                                          </button>
                                          <div className='text-white font-Lato text-lg pb-1' >
                                              {quantity}
                                          </div>
                                          <button className='bg-[#F49595] rounded-lg text-white text-3xl font-Inter font-light w-[3rem] h-[3.5rem] flex justify-center items-center pb-1' onClick={handleAdd}>
                                              +
                                          </button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex flex-row gap-3 tracking-[.03em] font-Rubik font-normal text-lg ml-2'>
                                  <div className='text-white'>Price - <span className='text-[#48BD77]'>
                                          {formatCurrency(price)}
                                          {/* <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /> */}
                                      </span>
                                  </div>

                              </div>
                              <div className='flex flex-col gap-2'>
                                  <button className='bg-[#FF8B8B] rounded-lg text-white text-base tracking-[.10em] font-Rubik font-medium uppercase w-full py-5 flex justify-center items-center' onClick={handleAddToCart}>
                                      Add to Cart
                                  </button>
                                  <div className='font-Lato font-medium text-[#F5F5F5] text-xs'>
                                      Free U.S. shipping for orders over  $20, and a risk-free <span className='underline underline-offset-4'>quality guarantee!</span>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}