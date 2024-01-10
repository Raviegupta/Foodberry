import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-rated-res-filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restau, index) => (
          <RestaurantCard key={restau.info.id} resData={restau} />
        ))}
      </div>
    </div>
  );
};

export default Body;