import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop' 
import About from './pages/About'
import { Contact } from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
   <>
   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar/>
    <ToastContainer/>
    <SearchBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
   
    </Routes>
    <Footer/>
   </div>
   </>
  )
}

export default App