import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { AllContext } from "../../components/context/context";
import { useContext } from "react";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

function ProductInfo({product}) {
    const {addToCart , cartItems , addToFav , removeFromFav , favorites} = useContext(AllContext);
    const isInCart = cartItems.some(i => i.id == product.id);
    const isInFav = favorites.some(i => i.id == product.id);
    const navigate = useNavigate()
    const haveEmail = localStorage.getItem("email")
    const handle = ()=> {
        if(haveEmail) {
            addToCart(product)
            toast.success(
                <div className="toast">
                    <img src={product.images[0]} alt="" />
                    <div className="info">
                        <h3>{product.title}</h3>
                        <p>Added to cart</p>
                        <button className="btn" onClick={()=> navigate("/cart")}>View Cart</button>
                    </div>
                </div>
            )
        }else {
            navigate("/register")
        }
    }

    const handleAddToFav = ()=> {
        if(haveEmail) {
            if (isInFav) {
                removeFromFav(product.id)
                toast.error(`${product.title} removed from favorites`)
            }else {
                addToFav(product)
                toast.success(`${product.title} added to favorites`)
            }
        }else {
            navigate("/register")
        }
    }

    return (
        <>
            <div className="info">
                <h2>{product.title}</h2>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>
                <p className="price">$ {product.price}</p>
                <p className="stock">Availability: <span>{product.availabilityStatus}</span></p>
                <p className="brand">Brand: <span>{product.brand}</span></p>
                <p className="desc">{product.description}</p>
                <p className="hurry">Hurry Up! Only 37 products left in stock.</p>
                <button className={`btn ${isInCart? "inCart" : ""}`} onClick={handle}>
                    {isInCart? "product in cart" : "Add to Cart"} 
                    <TiShoppingCart />
                </button>
                <div className="icon">
                    <span className={`${isInFav? "in-fav active" : ""}`} onClick={handleAddToFav}><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
            </div>
        </>
    )
}

export default ProductInfo;