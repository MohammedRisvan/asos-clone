import React, { useState } from 'react';
import {useLocation} from "react-router-dom";

const products=[
    {price:175,
    image:"https://images.asos-media.com/products/calvin-klein-jeans-unisex-reversible-skater-jacket-in-black/205437190-2?$n_320w$&wid=317&fit=constrain",
    name:"calvin Klein jeans Dark jacket"},
    {price:175,
    image:"https://images.asos-media.com/products/calvin-klein-jeans-unisex-reversible-skater-jacket-in-black/205437190-2?$n_320w$&wid=317&fit=constrain",
    name:"calvin Klein jeans Dark jacket"},
    {price:175,
    image:"https://images.asos-media.com/products/calvin-klein-jeans-unisex-reversible-skater-jacket-in-black/205437190-2?$n_320w$&wid=317&fit=constrain",
    name:"calvin Klein jeans Dark jacket"},
    {price:175,
    image:"https://images.asos-media.com/products/calvin-klein-jeans-unisex-reversible-skater-jacket-in-black/205437190-2?$n_320w$&wid=317&fit=constrain",
    name:"calvin Klein jeans Dark jacket"},
    {price:175,
    image:"https://images.asos-media.com/products/calvin-klein-jeans-unisex-reversible-skater-jacket-in-black/205437190-2?$n_320w$&wid=317&fit=constrain",
    name:"calvin Klein jeans Dark jacket"},
    {price:175,
    image:"https://images.asos-media.com/products/calvin-klein-jeans-unisex-reversible-skater-jacket-in-black/205437190-2?$n_320w$&wid=317&fit=constrain",
    name:"calvin Klein jeans Dark jacket"},
    {price:175,
    image:"https://images.asos-media.com/products/calvin-klein-jeans-unisex-reversible-skater-jacket-in-black/205437190-2?$n_320w$&wid=317&fit=constrain",
    name:"calvin Klein jeans Dark jacket"},
]
const MenSale = () => {
 const location=useLocation()
 const path=location.pathname 
//  console.log(location.pathname)
//  console.log(location,path)      
   const [showText,setShowText] = useState(true);

    return (
    <div>
      <path className='w-full h-10 bg-black text-white flex items-center '>
        {path}
      </path>
      <hr />
      <nav className='w-full flex items-center justify-center flex-col gap-10 py-5'>
        <h1 className='font-bold text-3xl'>Men's Sale</h1>
        <div className='w-[750px] text-lg '>
        <p onClick={()=>{setShowText(!showText)}}> Get the pieces you've been waiting for with the ASOS men’s sale. From shoes to shirts {showText&&"...⋁"}<span className={`${showText&&"hidden"}`}>
          our men's sale has all the best looks, all year round. Whatever your style or whichever key pieces you want to invest in next, discover our sale men's clothing at ASOS. Complete your outfit with our men's shoes sale, with brands like Nike and adidas Originals. Discover a choice of trainers, chelsea boots, flip flops, slippers and more. If you’re looking for key trends at lower than usual prices, then our men’s sale is where it's at. On that fitness hype? Check out our sale activewear for everything from sweat-wicking shorts and T-shirts to compression tops and running tights for giving your workout gear an easy update. Let ASOS be your guide.
          </span> </p>
        </div>
      </nav>
      <div className='  w-full h-fit flex gap-4 p-3  overflow-x-scroll '>
      
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>T-SHIRTS & VESTS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>SHOES & TRAINERS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>HOODIES & SWEETSHIRTS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>TROUSERS & CHINOS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>JACKETS & COATS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>SHIRTS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>SHORTS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>JEANS</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>SUITS &TILORING</p>
        <p className='py-2 px-8 flex-shrink-0 bg-slate-200 text-sm font-bold tracking-topwide cursor-pointer rounded-2xl '>ACTVEWEARS</p>
      </div>
      <div className='bg-gray-200 font-light text-lg grid  grid-flow-row grid-cols-6 gap-2 p-3 h-36  w-full'>
        <div className='w-72 font-medium h-80'>
        <div className="bg-white w-full flex item-center jsutify-center rounded">
          Sort
        </div>
        </div>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Size</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Discount%</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Category</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Product Type</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Style</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Brand</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Colour</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Body Fit</option>
        </select>
        <select className='bg-transparent w-full px-10  border-y-2 border-slate-300 hover:text-blue-600'>
            <option value="">Price Range</option>
        </select>
      </div>
      <div>
        <p>number of items{products.length}</p>
      <div className='h-full w-full grid grid-cols-4'>
{products.map((item,index)=>{
    return(<div key={index}>
        <img src={item.image}alt=""/>
        <p>{item.name} </p>
        <p>{item.price}</p>
        </div>)
})}</div>
      </div>
    </div>
  )
}

export default MenSale
