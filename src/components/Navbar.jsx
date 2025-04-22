import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between font-medium py-5'>
      <Link to='/'>
      <div>
        <h2 className='font-semibold text-2xl'>shop
            <span className='text-orange-600'>mandu</span>
        </h2>
      </div>
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/shop' className='flex flex-col items-center gap-1'>
          <p>Collections</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img
          onClick={() => {
            navigate('/shop');
            setShowSearch(true);
          }}
          src={assets.search_icon}
          alt="search"
          className='w-5 cursor-pointer'
        />

        <div className="group relative">
          <Link to='/login'>
            <img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>LogOut</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 cursor-pointer min-w-5' alt="cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu-icon"
          className='w-5 cursor-pointer sm:hidden'
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 z-100 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0 '}`}>
        <div className='flex flex-col text-gray-600'>
          <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={() => setVisible(false)}>
            <img src={assets.dropdown_icon} alt="drop-down" className='h-4 rotate-180 cursor-pointer' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6' to='/shop'>Shop</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6' to='/about'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
