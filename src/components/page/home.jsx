import React, { useState } from 'react';
import bcarousel from "../images/carosel2.jpg"
import ReactPlayer from 'react-player/lazy'
import videofile from '../images/carosal1.mp4'
import secondc from "../images/caarosel.jpg"
import thirdc from "../images/carosel2.jpg"
import videofile4c from "../images/carosel2.mp4"
// import carousel from"../images/""
const Home = () => {
const [Index,setIndex]=useState(3); 
    const carousel=[
      <ReactPlayer controls={false} url={videofile} playing loop muted width="100%" height="auto"/>,
      <img src={secondc} alt='second image in carousel'className="w-full h-auto"/>,
      <img src={thirdc} alt="third image in carousel"className="w-full h-auto"/>,
      <ReactPlayer  controls={false}url={videofile4c} playing loop muted width="100%" height="50%"/> 
    ]

    return (
        <div >
     
            <button className='flex gap-5'>
              <button className='py-2 px-3 bg-blue-300' onclick={()=>{setIndex(0)}}>a</button>
              <button className='py-2 px-3 bg-blue-300' onclick={()=>{setIndex(1)}}>b</button>
              <button className='py-2 px-3 bg-blue-300' onclick={()=>{setIndex(2)}}>c</button>
              <button className='py-2 px-3 bg-blue-300' onclick={()=>{setIndex(3)}}>d</button>
            </button>
        </div>
    );
};

export default Home;
