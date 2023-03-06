import { Delights } from '../../types/contentfulTypes';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useClickOutside } from '@mantine/hooks';

export default function DelightCard(data: Delights) {
  const [delightModalOpen, setDelightModal] = useState<boolean>(false);

  const {
    numReviews,
    rating,
    id,
    delightType,
    description,
    ingredients,
    nutrition,
    price,
    thumbnail,
    title,
  } = data;
  // console.log(thumbnail.fields.file.url)
  // console.log(rating/2)
  const { increaseCartQuantity} = useShoppingCart();
  const newDesc: any = description;
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(additive: number) {
    if (quantity + additive < 1) return;
    setQuantity(quantity + additive);
  }

  function handleAddToCart(id: string) {
    for (var i = 0; i < quantity; i++) {
      increaseCartQuantity(id);
    }
    setQuantity(1);
    setDelightModal(false);
  }

  return (
    <>
      <div className="border-[#FFCACA] sm:hover:border-[#F1F1F1] border-[3px] rounded-2xl sm:hover:shadow-lg transition-all duration-200 h-full w-full px-4 py-3 sm:hover:scale-110 ">
        <div className="h-full flex flex-col justify-between space-y-2 group ">
          {/* image container */}
          <div className="flex flex-col">
            <div className="w-full aspect-video p-3 rounded-2xl border-2 border-[#D89191]">
              <Image
                src={`https:${thumbnail.fields.file.url}`}
                width={thumbnail.fields.file.details.image?.width}
                height={thumbnail.fields.file.details.image?.height}
                layout="responsive"
              />
            </div>
            {/* title */}
            <h3 className="font-Inter font-bold text-grey-500 pt-1 pb-2">{title}</h3>
            {/* reviews */}
            <div className="inline-flex justify-center items-center space-x-3">
              {/* stars */}
              <div className="rating space-x-1 rating-sm">
                <input
                  readOnly
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-[#FF0000]"
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-[#FF0000]"
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-[#FF0000]"
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-[#FF0000]"
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-[#FF0000]"
                  checked
                />
              </div>
              {/* reviews */}
              <span className="text-[91%]">{numReviews} reviews</span>
            </div>
            {/* desc */}
            <div className="font-Inter m-auto">{documentToReactComponents(newDesc)}</div>
            {/* product details */}
            <div
              onClick={() => setDelightModal(true)}
              className="flex items-center space-x-1 cursor-pointer mt-1"
            >
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5125 26.4C18.6072 26.4 21.575 25.1707 23.7633 22.9824C25.9515 20.7942 27.1808 17.8263 27.1808 14.7317C27.1808 11.6371 25.9515 8.66921 23.7633 6.48098C21.575 4.29275 18.6072 3.06342 15.5125 3.06342C12.4179 3.06342 9.45003 4.29275 7.2618 6.48098C5.07357 8.66921 3.84424 11.6371 3.84424 14.7317C3.84424 17.8263 5.07357 20.7942 7.2618 22.9824C9.45003 25.1707 12.4179 26.4 15.5125 26.4ZM16.9711 10.3561C16.9711 9.96927 16.8174 9.59829 16.5439 9.32476C16.2703 9.05123 15.8994 8.89756 15.5125 8.89756C15.1257 8.89756 14.7547 9.05123 14.4812 9.32476C14.2077 9.59829 14.054 9.96927 14.054 10.3561V13.2732H11.1369C10.7501 13.2732 10.3791 13.4268 10.1056 13.7004C9.83205 13.9739 9.67838 14.3449 9.67838 14.7317C9.67838 15.1185 9.83205 15.4895 10.1056 15.763C10.3791 16.0366 10.7501 16.1902 11.1369 16.1902H14.054V19.1073C14.054 19.4941 14.2077 19.8651 14.4812 20.1387C14.7547 20.4122 15.1257 20.5659 15.5125 20.5659C15.8994 20.5659 16.2703 20.4122 16.5439 20.1387C16.8174 19.8651 16.9711 19.4941 16.9711 19.1073V16.1902H19.8881C20.275 16.1902 20.646 16.0366 20.9195 15.763C21.193 15.4895 21.3467 15.1185 21.3467 14.7317C21.3467 14.3449 21.193 13.9739 20.9195 13.7004C20.646 13.4268 20.275 13.2732 19.8881 13.2732H16.9711V10.3561Z"
                  fill="#5C1717"
                />
              </svg>
              <span className="font-Inter">Product Details</span>
            </div>
            {/* price */}
            <span className="mt-1 font-Inter text-[#E11B1B]">{formatCurrency(price)}</span>
          </div>
          {/* quick buy btn wrapper */}
          <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity inline-flex items-center justify-center">
            {/* button */}
            <button
              onClick={() => setDelightModal(true)}
              className="w-[90%] py-3 rounded-[2rem] bg-white text-[#F47C7C] font-Oswald"
            >
              Quick Buy
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={delightModalOpen}
        onRequestClose={() => {
          setDelightModal(false);
        }}
        closeTimeoutMS={250}
        className="absolute top-[50%] left-1/2 right-auto bottom-auto -mr-1/2 -translate-x-1/2 -translate-y-[40%] bg-[#FFCACA] rounded-[2rem] text-black animate-slide-margin-right"
        contentLabel="Delight"
        overlayClassName="fixed inset-0 bg-[#DFDFDF] opacity-40 bg-opacity-40" 
      >
        {/* container */}
        <div className="w-[65vw] py-5 px-10">
          {/* top flex */}
          <div className="flex justify-between items-baseline">
            {/* title */}
            <h1 className="font-Inter font-semibold text-[2rem] my-2">{title}</h1>
            {/* close btn */}
            <button onClick={() => setDelightModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* content flex */}
          <div className="flex justify-between items-start">
            {/* left (text) */}
            <div className="w-1/2 flex flex-col items-start space-y-6">
              {/* description */}
              <p className="font-Inter text-[1.05rem] font-Light">
                {documentToReactComponents(newDesc)}
              </p>
              {/* ingredients */}
              <div className="w-full overflow-clip flex flex-col gap-4">
                <p className="font-Rubik font-medium text-[1rem] ">
                  <span className='text-[#161616]'>Ingredients:</span>
                  {ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="after:content-[','] before:content-['\000A0'] last:after:content-none"
                    >
                      {ingredient}
                    </span>
                  ))}
                </p>
                {/* nutrition info */}
                <p className="font-Inter font-bold text-[0.95rem]">
                  <span className="text-[#161616] text-base">Product Facts</span>
                  <ul className="mt-1 text-sm">
                    {nutrition.map((nutrition) => (
                      <li key={nutrition} className="ml-4 before:content-['\2022\00A0\00A0'] ">
                        {nutrition}
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>

            {/* right (btns) */}
            <div className="w-1/2 text-right pl-[4rem] flex flex-col items-center">
              {/* flex */}
              <div className="flex flex-col h-full items-start space-y-3">
                <h2 className="font-Rubik text-[2rem]">Quantity</h2>

                {/* btns */}
                <div className="flex space-x-4 items-center font-Lato text-[1.5rem]">
                  {/* minus */}
                  <button
                    onClick={() => handleQuantity(-1)}
                    className="py-4  px-[.7rem] bg-[#F49595] rounded-lg inline-flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    </svg>
                  </button>
                  {/* quant */}
                  <span>{quantity}</span>
                  {/* add */}
                  <button
                    onClick={() => handleQuantity(1)}
                    className="py-4  px-[.7rem] bg-[#F49595] rounded-lg inline-flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>

                {/* price */}
                <div className="font-Rubik text-[1.55rem]">
                  Price - <span className="text-[#48BD77]">{formatCurrency(price * quantity)}</span>
                </div>

                {/* add to cart btn */}
                <button
                  onClick={() => handleAddToCart(id)}
                  className="font-Rubik font-Medium uppercase tracking-[.10em] inline-flex w-full bg-[#FF8B8B] items-center justify-center px-[3.5rem] py-5 rounded-[0.75rem]"
                >
                  <span>Add to Cart</span>
                </button>

                {/* smoll words */}
                <p className="text-[#161616] text-left text-[0.75rem]">
                  Free U.S. shipping for orders over $20, and a risk-free <span className='underline underline-offset-4'>quality guarantee!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
