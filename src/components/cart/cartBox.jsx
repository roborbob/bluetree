/** @format */

import React from "react";
import { CartState } from "../../utils/cart";
import { useSnapshot } from "valtio";

export default function CartBox() {
  const snap = useSnapshot(CartState);
  return (
    <div className={`${snap.cartItems.length > 0 && `bg-red-500`} h-20 w-20`}>
      cartBox
    </div>
  );
}
