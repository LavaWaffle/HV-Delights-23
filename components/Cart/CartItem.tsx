import { Asset } from "contentful";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import Image from "next/image"
import { formatCurrency } from "../../utilities/formatCurrency";
type CartItemProps = {
  id: string;
  quantity: number;
  readonly delightType: ReadonlyArray<'Sandwiches'|'Salads'|'Soups'|'Snacks'|'Drinks'>
  readonly description: { content: any, data: any, nodeType: string }
  readonly ingredients: ReadonlyArray<string>
  readonly numReviews: number
  readonly nutrition: ReadonlyArray<string>
  readonly price: number
  readonly rating: number
  readonly thumbnail: Asset
  readonly title: string
}

export default function CartItem({ id, quantity, delightType, description, ingredients, numReviews, nutrition, price, rating, thumbnail, title }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  
  return (
    // cart item container
    <div className="flex space-x-2 border-b-2 border-white">
      {/* left (img) */}
      <div className="w-3/4 h-full">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image?.width}
          height={thumbnail.fields.file.details.image?.height}
          layout="responsive"
        />
      </div>
      {/* right (info) */}
      <div className="w-full h-full">
        {/* title*/}
        <h3 className="font-Lora font-bold text-[1.5rem]">
          { title }
        </h3>
        {/* price */}
        <h3 className="font-Lora font-medium text-[#FD7676] text-[1.25rem]">
          { formatCurrency(price) }
        </h3>
        {/* btns container */}
        <div className="flex space-x-4 items-center font-Lato ">
          {/* minus */}
          <button onClick={() => decreaseCartQuantity(id)} className="py-2 px-[0.35rem] bg-[#F49595] rounded-lg inline-flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          {/* quant */}
          <span>{quantity}</span>
          {/* add */}
          <button onClick={() => increaseCartQuantity(id)} className="py-2 px-[0.35rem] bg-[#F49595] rounded-lg inline-flex items-center justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button onClick={() => removeFromCart(id)} className="pl-[0.25rem] font-Rubik font-light">remove</button>
        </div>
      </div>
    </div>
  )
}