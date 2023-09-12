import React from "react";
import { CDN_URL } from "../utils/constant";

export const ResturantCard = (props) => {
  const { resData } = props;
  //   console.log(resData);

  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    deliveryTime,
  } = resData?.data;
  //here we can pass as props and can destructure as parameters.

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restro-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="food-logo"
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(" ")}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
