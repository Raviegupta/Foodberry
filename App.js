import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './logo-100.jpg'
import pizza from './pizza.jpg'

// const heading = <h1>Foodberry App</h1>

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-contaiiner'>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const styleCard = ;

const RestaurantCard = (props) => {
    const {resName, cuisines} = props;
    return (
        <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
            <img className='res-logo' src={pizza} alt="pizza image" />
            <h3>{resName}</h3>
            <h3>
                <span>4.4 stars </span>
                <span>30 min</span>
            </h3>
            <p>{cuisines}</p>
            <p>Lalpur</p>
        </div>
    )
}


const Body = () => {
    return (
        <div className='body'>
            <div className='search'> </div>
            <div className='res-container'>
                <RestaurantCard resName='Meghna Food' cuisines='North Indian, Chinese' />
                <RestaurantCard resName='KFC' cuisines='Burger, Fast Food, Snacks' />
                <RestaurantCard resName="Domino's Pizza" cuisines='Pizzas, Italian, Pastas'  />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
            {/* <Footer /> */}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());