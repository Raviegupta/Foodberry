import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/Components/Header'
import Body from './src/Components/Body'

// const heading = <h1>Foodberry App</h1>


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