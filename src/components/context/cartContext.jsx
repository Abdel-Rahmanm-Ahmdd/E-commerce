import { useEffect, useState } from "react";
import {CartContext} from './context'

function CartProvider({children}) {
    const [cartItems , setCartItems] = useState(()=> {
        const savedCart = localStorage.getItem('cartItems')
        return savedCart ? JSON.parse(savedCart) : [];
    })
    const [favorites , setFavorites] = useState(()=> {
        const savedFav = localStorage.getItem('favoritesItems')
        return savedFav ? JSON.parse(savedFav) : [];
    })

    const addToFav = (item)=> {
        setFavorites((prev) => {
            if (prev.some(i => i.id == item.id)) return prev;
            return [...prev , item]
        })
    }

    useEffect(()=> {
        localStorage.setItem('favoritesItems' , JSON.stringify(favorites))
    },[favorites])

    const removeFromFav = (id)=> {
        setFavorites(prev => prev.filter(i => i.id != id))
    }

    const increaseQuantity = (id)=> {
        setCartItems(previtem => previtem.map(item=>
            item.id === id ? {...item , quantity: item.quantity + 1} : item
        ))
    }
    const decreaseQuantity = (id)=> {
        setCartItems(previtem => previtem.map(item=>
            item.id === id ? {...item , quantity: item.quantity - 1} : item
        ))
    }

    const deleteItem = (id)=> {
        setCartItems(prevItems => prevItems.filter(i => i.id !== id) )
    }

    const addToCart = (item)=> {
        setCartItems((prevItems)=> [...prevItems , { ...item , quantity: 1 }])
    }

    useEffect(()=> {
        localStorage.setItem("cartItems" , JSON.stringify(cartItems))
    },[cartItems])
    
    return (
        <CartContext.Provider value={{ addToCart , 
        cartItems , 
        increaseQuantity , 
        decreaseQuantity , 
        deleteItem , 
        addToFav , 
        favorites ,
        removeFromFav
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;