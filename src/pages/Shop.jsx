import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import { ArrowUpDown } from 'lucide-react';
const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];
    if (debouncedSearch && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); 

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, debouncedSearch, showSearch,products]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Men" onClick={toggleCategory} />
              MEN
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Women" onClick={toggleCategory} />
              WOMEN
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Kids" onClick={toggleCategory} />
              KIDS
            </label>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Topwear" onClick={toggleSubCategory} />
              Topwear
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Bottomwear"
                onClick={toggleSubCategory}
              />
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onClick={toggleSubCategory}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

    
    <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
            <h2 className="font-semibold">Products</h2>

            {/* Product Sorting */}
            <div className="relative">
                
                <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="border border-gray-300 px-3 py-1 text-sm rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Sort Products"
                >
                    <option value="relevant"> Sort By: Relevant</option>
                    <option value="low-high"> Price (Low to High)</option>
                    <option value="high-low"> Price (High to Low)</option>
                </select>
            </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
                <ProductItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            ))}
        </div>
    </div>
      </div>

  );
};

export default Collections;
