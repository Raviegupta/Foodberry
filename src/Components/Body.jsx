import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const fetchData = async () => {
    console.log('fetching the live api...');
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log('live api data is fetched, converted into json & now printing the json data ..');
    
    console.log(json);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // optioal chaining
    const liveResList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(liveResList)
  }

  useEffect(()=> {
    fetchData();
  }, [])

  console.log('Hello')

  // if(listOfRestaurant.length == 0) {
  //   return <h1>Loading...</h1>
  // }

  return listOfRestaurant.length == 0 ? <Shimmer /> : (
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