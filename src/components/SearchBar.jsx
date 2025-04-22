import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('shop') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return (
    showSearch && visible ? (
      <div className='border-t border-b bg-gray-50 text-center'>
        <div className="inline-flex items-center justify-center border border-gray-400 py-3 px-4 rounded-full my-4 min-w-96">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder='Search'
            className="flex-1 outline-none bg-inherit text-sm"
          />
          <img className='w-4' src={assets.search_icon} alt="search" />
        </div>
        <img
          onClick={() => setShowSearch(false)}
          className='inline w-4 cursor-pointer ml-4'
          src={assets.cross_icon}
          alt="close"
        />
      </div>
    ) : null
  );
};

export default SearchBar;
