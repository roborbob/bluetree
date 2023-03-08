/** @format */
import { proxy, subscribe } from "valtio";

export class cartItem {
  constructor({ sku, name, quantity, unitPrice, size, description }) {
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
  get active() {
    return CartState.cartItems.length > 0 ? true : false;
  },
});

subscribe(CartState, () => {
  localStorage.setItem("cart", JSON.stringify(CartState.cartItems));
});

export function AddItemToCart(newItem) {
  if (CartState.cartItems.findIndex(newItem.sku) !== -1) {
    CartState.cartItems.push(newItem);
    return true;
  } else {
    return false;
  }
}

export function RemoveItemFromCart(sku) {
  if (CartState.cartItems.findIndex(sku) !== -1) {
    let result = CartState.cartItems.findIndex(sku);
    CartState.cartItems.splice(result, 1);
    return true;
  } else {
    return false;
  }
}

export function UpdateCartItem(sku, key, value) {
  if (CartState.cartItems.findIndex(sku) !== -1) {
    let itemIndex = CartState.cartItems.findIndex(sku);
    CartState.cartItems[itemIndex][key] = value;
  }
}
