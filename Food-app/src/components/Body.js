import React, { useState } from "react";
import { ResturantCard } from "./ResturantCard";
import resList from "../utils/mockData";

export const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(resList);// this is destructuring comcept.

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
