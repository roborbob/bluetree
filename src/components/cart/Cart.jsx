/** @format */
import React from "react";
import { useSnapshot } from "valtio";
import { CartState, cartItem } from "../../utils/cart";

export default function Cart() {
  const cart = useSnapshot(CartState);
  const item = new cartItem("sku1234", "Hat", 5, 45, "medium", "Horrible hat");

  return (
    <div>
      <div onClick={() => (CartState.cartItems = [])}>Hey</div>
      <div onClick={() => CartState.cartItems.push(item)}>Other button</div>
    </div>
  );
}
