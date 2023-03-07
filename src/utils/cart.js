/** @format */
import { proxy } from "valtio";

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
  totalPrice: 0,
  totalItems: 0,
});
