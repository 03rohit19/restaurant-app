import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils.js/cartSlice";
import { removeItem } from "../Utils.js/cartSlice";

const CartChamber = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const removeCartItems = (dish) => {
    dispatch(removeItem(dish));
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart-Items - {cartItems.length}</h1>
      <button
        className="bg-purple-200 p-2 shadow-lg rounded-md hover:bg-slate-100 font-bold m-2 font-serif"
        onClick={() => handleClearCart()}
      >
        Clear-Cart{" "}
      </button>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-64 p-2 m-2 shadow-xl bg-gray "
        >
          <p className="font-bold">{item.name}</p>
          <p className="">Price: {item.price} ₹</p>
          <p className="">Delivery will be on time</p>
          <button
            className="bg-purple-200 p-2 shadow-lg rounded-md hover:bg-slate-100 font-bold m-2 font-serif"
            onClick={() => removeCartItems(item)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartChamber;
