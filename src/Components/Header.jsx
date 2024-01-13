import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    console.log('Header is rendered');

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className='login' onClick={()=> {
                        // if(btnName=='Login') {
                        //     setBtnName('Logout')  
                        // } else {
                        //     setBtnName('Login'); 
                        // }
                        btnName=='Login'?setBtnName('Logout'):setBtnName('Login');
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;