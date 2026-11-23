import './App.css'
import TopHeader from './components/headers/topHeader';
import BtmHeader from './components/headers/btmHeader';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/home/home'
import ProductDetails from './pages/productsDetails/productDetails';
import Cart from './pages/cart/cart'
import Favorite from './pages/favorite/favorite'
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import CategoryPage from './pages/categoryPage/categoryPage';
import SearchResults from './pages/searchResults';
import Register from './pages/login/register';
import Login from './pages/login/login';
import { useState } from 'react';
function App() {
  const [haveEmail , setHaveEmail] = useState( ()=> {
    return localStorage.getItem("email")
  })
  return(
    <>
      {haveEmail? (
      <>
        <header>
          <TopHeader />
          <BtmHeader />
        </header>
        <AnimatePresence>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products/:id' element={<ProductDetails />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/search' element={<SearchResults />}/>
            <Route path='/favorite' element={<Favorite />}/>
            <Route path='/category/:category' element={<CategoryPage />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </AnimatePresence>
      </> 
      ):( 
      <Register haveEmail={setHaveEmail}/> 
      )}
      <Toaster 
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#e9e9e9',
          borderRadius: "5px",
          padding: "14px"
        }
      }}/>
    </>
  )
}

export default App
