import { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
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