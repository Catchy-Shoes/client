import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"


import { Products } from "./pages/products"
import { Product } from "./pages/product"

import { NotFound } from "./pages/not-found"

import { useCart } from './context/cart'
import { Cart } from "./pages/cart"
import { Data } from "./pages/product/data"
import { NavBar } from "./components/navbar"

import {SignInPage} from './components/pages/LoginPage'
import {LandingPage} from "./components/pages/LandingPage";
import {SignUpPage} from './components/pages/RegisterPage'
import {ForgetPasswordPage} from './components/pages/ForgetPasswordPage'
import {HomePage} from './components/pages/HomePage'

import './App.css'

function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      {/* <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} /> */}
      <Routes>
          {/* Inner Routes  */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={ <HomePage/> } />
        <Route path="/" element={ <LandingPage/> } />

           {/* Auth Routes  */}    
        <Route path="/login" element={ <SignInPage/> } />
        <Route path="/register" element={ <SignUpPage/> } />
        <Route path="/forget-password" element={ <ForgetPasswordPage/> } />

           {/* Invalid Routes  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
