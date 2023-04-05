import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeAll, children }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    //step 1
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    //step 2
    product.quantity = product.quantity || 1;
    total += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h2>cart container</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total price: {total}</p>
      <p>Total shipping: {totalShipping}</p>
      <p>Tax: {tax}</p>
      <h6>Grand Total: {grandTotal}</h6>
      <button onClick={removeAll} className="deleteAll">
        Remove all
      </button>
      {children}
    </div>
  );
};

export default Cart;
