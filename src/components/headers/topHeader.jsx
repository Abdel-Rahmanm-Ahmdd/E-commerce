import Logo from '../img/icon.png'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import {Link} from 'react-router-dom';
import { AllContext } from '../context/context';
import { useContext } from 'react';
import SearchHeader from './searchHeader';
function TopHeader() {

    const {cartItems , favorites} = useContext(AllContext)

    return (
        <div className='top-header'>
            <div className="container">
                <Link to="" className='logo'><img src={Logo} alt="" /> Online Store</Link>
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