import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// let liveResList;

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterdRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body component is called");

  const fetchData = async () => {
    console.log("fetching the live api...");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      "live api data is fetched, converted into json & now printing the json data .."
    );

    console.log(json);
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // optioal chaining
    liveResList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(liveResList);
    setFilteredRestaurant(liveResList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if(listOfRestaurant.length == 0) {
  //   return <h1>Loading...</h1>
  // }

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restaurant card and updates the list of cards
              // searchText
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-res-filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurant(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="top-rated-res-filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.map((res) => res);
            setFilteredRestaurant(filteredList)
          }}
        >
          Show All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterdRestaurant.map((restau, index) => (
          <RestaurantCard key={restau.info.id} resData={restau} />
        ))}
      </div>
    </div>
  );
};

export default Body;
