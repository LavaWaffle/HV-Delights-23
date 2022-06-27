import { Modal } from '@mantine/core';
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
  opened: boolean;
  setOpened: any;
}

export default function DelightModalR({ price, title, thumbnail, description, ingredients, nutrition, opened, setOpened }: DelightModalProps) {
  
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  
  return (
    <Modal 
      opened={opened}
      onClose={setOpened(false)}
      centered
      withCloseButton={true}
      >
      iugioug
    </Modal>
  )
}