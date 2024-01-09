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
    const {resData} = props;
    return (
        <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="pizza image" />
            <h3>{resData.info.name}</h3>
            <h3>
                <span>{resData.info.avgRating} </span>
                <span>{resData.info.sla.slaString}</span>
            </h3>
            <h3>{resData.info.costForTwo}</h3>
            <p>{resData.info.cuisines.join(", ")}</p>
            <p>{resData.info.areaName}</p>
        </div>
    )
}


// Restaurant Data
const resObj = {
    info: {
      id: "502957",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "bs9qgsy25pn07pzn6xx1",
      locality: "Shivananda Circle",
      areaName: "Seshadripuram",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.4,
      parentId: "10496",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/andhra-gunpowder-shivananda-circle-seshadripuram-bangalore-502957",
      type: "WEBLINK",
    },
  }





const Body = () => {
    return (
        <div className='body'>
            <div className='search'> </div>
            <div className='res-container'>
                <RestaurantCard resData={resObj}/>
                <RestaurantCard resData={resObj}/>
                
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