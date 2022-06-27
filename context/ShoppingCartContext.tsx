import { Asset, createClient } from "contentful";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Delights } from "../types/contentfulTypes";

type ShoppingCartProviderProps = {
  children: ReactNode;
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  findItem: (id: number) => any, //{
  //   readonly id: number
  //   readonly delightType: ReadonlyArray<'Sandwiches'|'Salads'|'Soups'|'Snacks'|'Drinks'>
  //   readonly description: { content: any, data: any, nodeType: string }
  //   readonly ingredients: ReadonlyArray<string>
  //   readonly numReviews: number
  //   readonly nutrition: ReadonlyArray<string>
  //   readonly price: number
  //   readonly rating: number
  //   readonly thumbnail: Asset
  //   readonly title: string
  // }
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number
  cartItems: CartItem[]
}

type CartItem = {
  id: string;
  quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: string) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: string) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }
  
  let db: any;

  function findItem(id: number) {
    // const delights = 
  }

  return (
    <ShoppingCartContext.Provider value={{ 
      getItemQuantity, 
      increaseCartQuantity, 
      decreaseCartQuantity, 
      removeFromCart,
      cartItems,
      cartQuantity,
      openCart,
      closeCart,
      findItem
    }}>
      {children}
      {/* <ShoppingCart isOpen={isOpen}/> */}
    </ShoppingCartContext.Provider>)
}