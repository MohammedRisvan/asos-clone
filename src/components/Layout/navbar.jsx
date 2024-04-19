import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Navber = () => {
  const [profile, setProfile] = useState(false);

  const navigate = useNavigate();
  const showProfile=()=>{
    // const token=document.cookie()
    // console.log(token)
    // if(){

  }

  return (
    <div className="flex flex-col w-full h-50  h-full">
      <div className="w-full h-12 bg-slate-400 flex justify-end gap-5">
        <p>Marketplace</p>
        <p>Help & FAQs</p>
        <p></p>
      </div>
      <div className="w-full h-20 bg-gray-950 flex items-center">
        <h1 className="font-semibold text-5xl text-white px-5 pb-3">asos</h1>
        <button
          className="text-white px-5 hover:bg-gray-700 h-full"
          onClick={() => {
            navigate("/women");
          }}
        >
          WOMEN
        </button>
        <button
          className="text-white px-10 hover:bg-gray-700 h-full"
          onClick={() => {
            navigate("/men");
          }}
        >
          MEN
        </button>
        <div className="px-5 w-full">
          <input
            className="w-full h-8 px-5 rounded-xl"
            placeholder="Search for itenms and brands ..."
          />
        </div>
        <button type="button" className="h-full px-5"
         onMouseEnter={()=>{setProfile(true)}}
       
         onClick={()=>{if(!profile){setProfile(true)}else{setProfile(false)}}}
         onMouseLeave={()=>{setProfile(false)}}>
          <FiUser className="text-white h-10 w-7"/>
        {profile&&<div   onMouseEnter={()=>{setProfile(true)}} className="w-60 -ml-16 absolute bg-white">
            <div className="w-full flex justify-between bg-blue-200 h-10 px-3 py-3">
            <span><a href="/signin">Sign In</a> |<a href="/signup">Join</a></span> <button onClick={()=>{setProfile(false)}}><RxCross1/></button>
            </div>
            <ul className="flex flex-col gap-3 px-3 py-3">
              <li className="flex items-center gap-5">
              <FiUser className=" h-10 w-7"/>
              <p>My Account</p>
              </li>
              <li className="flex items-center gap-5">
              <PiShoppingBagOpenLight  className=" h-10 w-7"/>
              <p>My Order</p>
              </li>
              <li className="flex items-center gap-5">
              <CiCircleQuestion className=" h-10 w-7"/>
              <p>Returns Information</p>
              </li>
              <li className="flex items-center gap-5">
              <RiMessage2Line className=" h-10 w-7"/>
              <p>Contact Prifrances</p>
              </li>
            </ul>
            <div>
            </div>
           </div>}
           
        </button>
        <button className="h-full px-5">
          <IoHeartOutline
            className="text-white w-7 h-10"
            aria-label="Like Icon"
          />
        </button>
        <button className="h-full px-5">
          <BsBag className="text-white w-7 h-10" />
        </button>
      </div>
    </div>
  );
};

export default Navber;


export const WomenNavbar = () => {
  return (
    <div className="h-10 bg-slate-700 w-full flex items-center text-white px-24 ">
      <p className="py-2 px-3 hover:bg-white hover:text-black">New in</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Clothing</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Trending</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Shoes</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Accessories</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Brands</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Sportswears</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Topman</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Marketplace</p>
      <p className="py-2 px-3 hover:bg-white hover:text-black">Sale</p>
    </div>
  );
};
