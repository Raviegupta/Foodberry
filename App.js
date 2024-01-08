import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = <h1>Foodberry App</h1>


const AppLayout = () => {
    return (
        <div className='app'>
            <h1>Foodberry</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());