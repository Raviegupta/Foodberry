import { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);


    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
        setResInfo(json?.data);
    }

    useEffect(() => {
        fetchMenu();
    }, [])

    if(resInfo == null) return <Shimmer />

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    console.log(itemCards)


    return (
        <div className="menu">
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price/100}</li> )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;