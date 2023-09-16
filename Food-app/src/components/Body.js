import React, { useEffect, useState } from "react";
import { ResturantCard } from "./ResturantCard";
// import resList from "../utils/mockData";

export const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]); // this is destructuring concept.
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListOfRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log("this is coming from api", json);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  if(listOfRestro.length===0){
    return <div>Loading...</div>
  // here we can write shimmer ui code to show the fake data on ui untill the page gets loaded properly
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            type="text"
            className="search-box"
            placeholder="search..."
            onChange={(e) => setSearchText(e.target.value)}
            
          />
          <button
            onClick={(e) => {
              console.log(searchText);
              const filteredRestaurants = listOfRestro.filter(
                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestro(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
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
