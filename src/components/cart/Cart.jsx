/** @format */
import React from "react";
import { useSnapshot } from "valtio";
import { CartState, cartItem } from "../../utils/cart";

export default function Cart() {
  const cart = useSnapshot(CartState);
  let newItem = {
    sku: "sku1234",
    name: "hat",
    quantity: 5,
    unitPrice: 45,
    size: "medium",
    description: "horrible hat",
  };
  const item = new cartItem(newItem);

  return (
    <div>
      <div onClick={() => (CartState.cartItems = [])}>Hey</div>
      <div onClick={() => CartState.cartItems.push(item)}>Other button</div>
    </div>
  );
}
