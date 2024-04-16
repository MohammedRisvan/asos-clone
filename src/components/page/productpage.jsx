import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
// import sharebutton from 'react-share'
function Productpage() {
//     const [id,setid]=useState("hellow");
    
//   const a =  localStorage.setItem( "productId", id );
//  const productid=localStorage.getItem("productId");
//  setid(productid);
//   console.log(productid,"abcd")
// //  setid(productid);   
const image=[
  "https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-1-orange?$n_240w$&wid=168&fit=constrain",
  "https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-2?$n_240w$&wid=40&fit=constrain",
  "https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-3?$n_240w$&wid=40&fit=constrain",
  "https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-4?$n_240w$&wid=40&fit=constrain",
  "https://images.asos-media.com/products/new-balance-610-trainers-in-orange/205337534-5?$n_240w$&wid=40&fit=constrain"
  
];
let discription="New Balance 610 trainers in orange";
  return (
    <div className='flex'>
     {/* <h1>{"hellow"}</h1> 
     <div className='w-60 h-60 rounded-full bg-red-600 'style={{
      clipPath: 'polygon(50% 50%, 0% 100%, 0% 100%, 100% 100%, 100% 100%)'}}>
      </div> */}
      <div className='flex flex-col gap-2'>
        <img src={image[0]} className='w-16' alt="firstimg" />
        <img src={image[1]} className='w-16' alt="" />
        <img src={image[2]} className='w-16' alt="" />
        <img src={image[3]} className='w-16' alt="" />
        <img src={image[4]} className='w-16' alt="" />
      </div>
      <div className='w-1/3'>
        <img src={image[0]} className='w-full' alt="" />
      </div>
      <div className=''>
        <h1>{discription}<input type=''/></h1>
      </div>
    </div>
  )
}

export default Productpage;
