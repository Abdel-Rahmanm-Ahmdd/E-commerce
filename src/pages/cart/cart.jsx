import {CartContext} from '../../components/context/context'
import { useContext } from 'react';
import './cart.css';
import { FaTrashAlt } from "react-icons/fa";
import Animation from "../../components/animation"
function Cart() {
    const {cartItems , increaseQuantity , decreaseQuantity , deleteItem} = useContext(CartContext)
    const total = cartItems.reduce((acc,item)=> acc + item.price * item.quantity ,0)
    return (
        <Animation>
            <div className="cart">
            <div className="container">
                <h2>Order Summary</h2>
                <div className="checkOut">
                    {cartItems.length == 0 ? (<p>Cart Is Empty</p>) : (
                        cartItems.map((item,index) => {
                            return <div key={index} className='selected-products'>
                                <div className='content'>
                                    <div className="info">
                                        <img src={item.images[0]} alt="" />
                                        <div className="product-info">
                                            <p className='title' >{item.title}</p>
                                            <p className="price">${item.price}</p>
                                            <div className='btn-quantity'>
                                                <button onClick={()=> item.quantity > 1 ? decreaseQuantity(item.id) : ""}>-</button>
                                                <span className='quantity'>{item.quantity}</span>
                                                <button onClick={()=> increaseQuantity(item.id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className='trash' onClick={()=> deleteItem(item.id)}><FaTrashAlt /></span>
                                </div>
                            </div>
                        })
                    )}
                </div>
                <div className="order">
                    <div className="total">
                        <p>Total :</p>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button>Place Order</button>
                </div>
            </div>
            </div>
        </Animation>
    )
}

export default Cart;