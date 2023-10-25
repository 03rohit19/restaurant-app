import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils.js/restaurantData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineOffline from "../Utils.js/useOnlineOffline";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setListOfRes(resObj);
  }, []);

  useEffect(() => {
    const filteredRes = listOfRes.filter((x) =>
      x.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRes(filteredRes);
  }, [listOfRes, searchText]);

  const onlineStatus = useOnlineOffline;
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline , please check your internet connection
      </h1>
    );

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-2 my-2">
      <div className="flex bg-white shadow-lg">
        <div className="flex p-5">
          <input
            type="text"
            className="search box bg-gray-100 text-black focus:bg-slate-100 p-2 m-2"
            value={searchText}
            onChange={(x) => {
              setSearchText(x.target.value);
            }}
          />
          <button
            className="bg-purple-200 p-2 shadow-lg rounded-md hover:bg-slate-100 font-bold m-2 font-serif"
            onClick={() => {
              const filteredRes = listOfRes.filter((x) =>
                x.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filteredRes);
            }}
          >
            Search
          </button>

          <button
            className="bg-purple-200 p-2 shadow-lg rounded-md hover:bg-slate-100 font-bold m-2 font-serif"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (x) => x.data.avgRating > 4
              );
              setFilterRes(filteredList);
            }}
          >
            Top &#9733; rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap p-3">
        {filterRes.map((card) => (
          <Link key={card.data.id} to={"/restaurant/" + card.data.id}>
            <RestaurantCard resData={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
