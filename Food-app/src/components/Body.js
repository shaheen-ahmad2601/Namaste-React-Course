import React, { useState } from "react";
import { ResturantCard } from "./ResturantCard";
import resList from "../utils/mockData";

export const Body = () => {
  let [listOfRestro, setListOfRestro] = useState(resList);

  // let listOfRestroJS = [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       tags: [],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "338475",
  //       name: "dominos",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       tags: [],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //       data: {
  //         id: "312475",
  //         name: "macdy",
  //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //         cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //         tags: [],
  //         costForTwo: 40000,
  //         deliveryTime: 36,
  //         avgRating: "4.1",
  //       },
  //     },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestro.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestro(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestro.map((res) => (
          <ResturantCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
//onClick and onMouseOver so many js events are there we can use any of them
// not using keys (not acceptable) <<<<<at least use index as keys <<<< unique id (best practice)
