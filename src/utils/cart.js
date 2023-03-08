/** @format */
import { proxy, subscribe } from "valtio";

export class cartItem {
  constructor(sku, name, quantity, unitPrice, size, description) {
    this.sku = sku;
    this.name = name;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.size = size;
    this.description = description;
    this.totalPrice = this.unitPrice * this.quantity;
  }
}

export const CartState = proxy({
  cartItems: JSON.parse(localStorage.getItem("cart")) ?? [],
  vespa: [],
  get totalPrice() {
    return CartState.cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
  },
  get totalItems() {
    return CartState.cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  },
});

subscribe(CartState, () => {
  localStorage.setItem("cart", JSON.stringify(CartState.cartItems));
});
