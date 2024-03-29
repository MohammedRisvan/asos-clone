import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FiUser } from 'react-icons/fi';
import { IoHeartOutline } from 'react-icons/io5';
import { FcLike } from "react-icons/fc";
const Navber = () => {
  const [auth, setAuth] = useState(false);
  const [userName, sertUserName] = useState("");
  const [men,setMen]=useState(true)
  return (
    <div className="flex flex-col w-full h-50  h-full">
      <div className="w-full h-12 bg-slate-400 flex justify-end gap-5">
        <p>Marketplace</p>
        <p>Help & FAQs</p>
        <p></p>
        </div>
      <div className="w-full h-20 bg-gray-950 flex items-center">
        <h1 className="font-semibold text-5xl text-white px-5 pb-3">asos</h1>
        <button className="text-white px-5 hover:bg-gray-700 h-full">WOMEN</button>
        <button className="text-white px-10 hover:bg-gray-700 h-full">MEN</button>
        <div className="px-5 w-full">
        <input className="w-full h-8 px-5 rounded-xl"placeholder="Search for itenms and brands ..." />
        </div>
        <button
      type="button"
      className="h-full px-5"
      // onClick={handleClick} // Attach a click event handler
    >
      <FiUser className="text-white h-10 w-7" />
    </button>
    <button className="h-full px-5" > <IoHeartOutline
      className="text-white w-7 h-10"
      aria-label="Like Icon"
    />
  </button>
  <button className="h-full px-5"><BsBag className="text-white w-7 h-10"/>
  </button>
      </div>
      {men?<div className="h-10 bg-slate-700 w-full flex items-center text-white px-24 ">
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">New in</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Clothing</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Trending</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Dress</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Shoe</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Accessories</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Face + Body</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Brands</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">SportsWear</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">TopShop</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">MarketPlace</p>
        <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Sale</p>
      </div>:

      <div className="h-10 bg-slate-700 w-full flex items-center text-white px-24 ">
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">New in</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Clothing</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Trending</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Shoes</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Accessories</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Brands</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Sportswears</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Topman</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Marketplace</p>
      <p onMouseOver={()=>{}}className="py-2 px-3 hover:bg-white hover:text-black">Sale</p>
      </div>}
      <div className="w-full h-24 bg-green-500">three</div>
    </div>
  );
};

export default Navber;
