import { useState } from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from "../../utilities/formatCurrency";

type DelightModalProps = {
  price: number;
  title: string;
  thumbnail: any;
  description: any;
  ingredients: any;
  nutrition: any;
  closeModal: () => void;
}

export default function DelightModalR({ price, title, thumbnail, description, ingredients, nutrition, closeModal }: DelightModalProps) {
  
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

  function handleClose() {
    closeModal()
  }
  
  return (
    <div>owo</div>
  )
}