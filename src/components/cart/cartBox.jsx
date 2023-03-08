/** @format */

import React from "react";
import { CartState } from "../../utils/cart";
import { useSnapshot } from "valtio";

export default function CartBox() {
  const cart = useSnapshot(CartState);
  return (
    <div className={`${cart.cartItems.length > 0 && `bg-red-500`} h-20 w-20`}>
      cartBox
      {cart.cartItems &&
        cart.cartItems.map((e, i) => (
          <p key={i}>
            {e.name},{e.unitPrice}
          </p>
        ))}
    </div>
  );
}
