import {FaStar} from "react-icons/fa";
import {FaStarHalfAlt} from "react-icons/fa";
import {FaCartArrowDown} from "react-icons/fa6";
import {FaRegHeart} from "react-icons/fa";
import {FaShare} from "react-icons/fa";
import {Link} from "react-router-dom";
import {MdDone} from "react-icons/md";
import {AllContext} from "../context/context";
import {useContext} from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Product({item}) {
    const {addToCart, cartItems , addToFav , favorites , removeFromFav} = useContext(AllContext);
    const isInCart = cartItems.some(i => i.id == item.id);
    const isInFav = favorites.some(i => i.id == item.id);
    const navigate = useNavigate()
    
    const handleAddToCart = ()=> {
        addToCart(item)
        toast.success(
            <div className="toast">
                <img src={item.images[0]} alt="" />
                <div className="info">
                    <h3>{item.title}</h3>
                    <p>Added to cart</p>
                    <button className="btn" onClick={()=> navigate("/cart")}>View Cart</button>
                </div>
            </div>
        )
    }
    
    const handleAddToFav = ()=> {
        if (isInFav) {
            removeFromFav(item.id)
            toast.error(`${item.title} removed from favorites`)
        }else {
            addToFav(item)
            toast.success(`${item.title} added to favorites`)
        }
    }

    const haveEmail = localStorage.getItem("email");

    return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
        <Link to={haveEmail? `/products/${item.id}` : `/register`}>
            <div className="img-product">
                <img src={item.images[0]} alt="" />
            </div>
            <p className="product-name">{item.title}</p>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>
            <p className="price">${item.price}</p>
        </Link>
        <div className="icons">
            <span onClick={handleAddToCart} className="btn-cart">
                <FaCartArrowDown />
            </span>
            <span className={`${isInFav? "in-fav" : ""}`} onClick={handleAddToFav}>
                <FaRegHeart />
            </span>
            <span>
                <FaShare />
            </span>
        </div>
        <div className="done">
            <span>
                <MdDone />
            </span>
            In Cart
        </div>
    </div>
    );
}

export default Product;
