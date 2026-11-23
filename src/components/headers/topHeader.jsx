import Logo from '../img/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import {Link} from 'react-router-dom';
import { CartContext } from '../context/context';
import { useContext } from 'react';
import SearchHeader from './searchHeader';
function TopHeader() {

    const {cartItems , favorites} = useContext(CartContext)

    return (
        <div className='top-header'>
            <div className="container">
                <Link to=""><img src={Logo} alt="" /></Link>
                <SearchHeader />
                <div className="icons">
                    <Link to="/favorite">
                        <div className="icon">
                            <FaRegHeart />
                            <span className="count">{favorites.length}</span>
                        </div>
                    </Link>
                    <Link to="/cart">
                        <div className="icon">
                            <TiShoppingCart />
                            <span className="count">{cartItems.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;