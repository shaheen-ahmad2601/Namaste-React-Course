import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const getData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await getData.json();
    console.log("jsonData", jsonData);
    const resValue = jsonData.cards[5].card.card.gridElements.infoWithStyle.restaurants[0].info
    .name;
    setResInfo(resValue);
  };

  // data-cards
  return (
    <div>
      
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Lassi</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
