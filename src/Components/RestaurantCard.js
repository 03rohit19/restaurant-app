import React from "react";

import { CARDLOGO_URL } from "../Utils.js/importantfiles";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwoString,
    avgRating,
    slaString,
    // id,
  } = resData?.data;

  return (
    <div className="w-[250px] h-[350px] p-2 m-2 shadow-xl bg-gray">
      <div className="h-full overflow-hidden">
        <img
          className="img-logo h-40 w-[250px] object-cover"
          src={CARDLOGO_URL + cloudinaryImageId}
          alt="LogoCard"
        />
        <h3 className="font-bold text-xl">{name}</h3>
        <h4>{cuisines && cuisines.join(", ")}</h4>
        <h4>{costForTwoString}</h4>
        <h4>{avgRating} &#9733;</h4>
        <h4>{slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
