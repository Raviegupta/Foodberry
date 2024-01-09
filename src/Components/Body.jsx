import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className='body'>
            <div className='search'> </div>
            <div className='res-container'>
                {resList.map((restau, index) =>  (
                    <RestaurantCard key={restau.info.id} resData={restau} /> 
                ))}

            </div>
        </div>
    )
}

export default Body;