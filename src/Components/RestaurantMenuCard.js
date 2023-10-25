import React from "react";
import { useParams } from "react-router-dom";
import { CARDLOGO_URL } from "../Utils.js/importantfiles";
import resObj from "../Utils.js/restaurantData";
import { addItem } from "../Utils.js/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuCard = () => {
  const { id } = useParams();
  const restaurant = resObj.find((item) => item.data.id === id);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const { cloudinaryImageId, name, slaString } = restaurant.data;

  const dishes = [
    { name: "Dummy Dish 1", price: 100 },
    { name: "Dummy Dish 2", price: 150 },
    { name: "Dummy Dish 3", price: 200 },
    { name: "Dummy Dish 4", price: 120 },
    { name: "Dummy Dish 5", price: 180 },
    { name: "Dummy Dish 6", price: 90 },
    { name: "Dummy Dish 7", price: 170 },
    { name: "Dummy Dish 8", price: 130 },
    { name: "Dummy Dish 9", price: 110 },
    { name: "Dummy Dish 10", price: 160 },
    { name: "Dummy Dish 11", price: 140 },
    { name: "Dummy Dish 12", price: 100 },
    { name: "Dummy Dish 13", price: 150 },
    { name: "Dummy Dish 14", price: 200 },
    { name: "Dummy Dish 15", price: 120 },
  ];

  return (
    <>
      <h1 className="p-2 m-2 text-4xl font-bold my-4">{name}</h1>
      <img
        className="h-50 w-52 object-cover p-2 m-2"
        src={CARDLOGO_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h1 className="p-2 m-2 text-xl font-bold my-4">Menu</h1>

      <div className="max-h-80 overflow-y-auto">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="flex flex-col w-64 p-2 m-2 shadow-xl bg-gray"
          >
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold">{dish.name}</h1>
                <span class Name="font-bold">
                  {dish.price} ₹
                </span>
                <p className="font-bold">Delivery Time: {slaString}</p>
              </div>
              <button
                className="bg-purple-200 p-2 shadow-lg rounded-md hover:bg-slate-100 font-bold m-2 font-serif"
                onClick={() => handleAddItems(dish)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenuCard;
