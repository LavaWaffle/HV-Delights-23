import { Delights } from '../../types/contentfulTypes';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export default function DelightCard(data: Delights) {
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
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const newDesc: any = description;
  return (
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
          <h3 className="font-Inter font-semibold">{title}</h3>
          {/* reviews */}
          <div className="inline-flex items-baseline space-x-3">
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
            <span>{numReviews} reviews</span>
          </div>
          {/* desc */}
          <div className="font-Inter m-auto">{documentToReactComponents(newDesc)}</div>
          {/* product details */}
          <div className="flex items-center space-x-1 cursor-pointer mt-1">
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
          <span className="mt-1">{formatCurrency(price)}</span>
        </div>
        {/* quick buy btn wrapper */}
        <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity inline-flex items-center justify-center">
          {/* button */}
          <button
            onClick={() => increaseCartQuantity(id)}
            className="w-[90%] py-3 rounded-[2rem] bg-white text-[#F47C7C] font-Oswald"
          >
            Quick Buy
          </button>
        </div>
      </div>
    </div>
  );
}
