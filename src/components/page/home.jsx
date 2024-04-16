import React, { useState } from 'react';
// import bcarousel from "../images/carosel2.jpg"
// import ReactPlayer from 'react-player/lazy'
// import videofile from '../images/carosal1.mp4'
// import secondc from "../images/caarosel.jpg"
// import thirdc from "../images/carosel2.jpg"
// import videofile4c from "../images/carosel2.mp4"
// import carousel from"../images/""
const Home = () => {
// const [Index,setIndex]=useState(3); 
//     const carousel=[
//       <ReactPlayer controls={false} url={videofile} playing loop muted width="100%" height="auto"/>,
//       <img src={secondc} alt='second image in carousel'className="w-full h-auto"/>,
//       <img src={thirdc} alt="third image in carousel"className="w-full h-auto"/>,
//       <ReactPlayer  controls={false}url={videofile4c} playing loop muted width="100%" height="50%"/> 
//     ]

    return (<div>
        <div className="flex flex-col gap-10 items-center justify-center  h-screen bg-cover bg-no-repeat" style={{backgroundImage:"URL('https://content.asos-media.com/-/media/homepages/unisex/generic-hp/13-march-2024/asos_march_generic-hp_desktop.jpg')"
        }} >
            <div className='flex flex-col items-center justify-center'>
<button className='bg-black text-white text-7xl tracking-topwide font-bold px-10 py-5'>ASOS</button>
<p className='bg-black text-white text-xl font-medium px-5 tracking-topwide py-1 '>ASOS DESIGIN and 850+ brands</p></div>
<div className='flex gap-10  '>
    <button className=' bg-white font-semibold text-2xl px-10 py-3' onClick={()=>alert("dfd")}>SHOPE MEN</button>
    <button className=' bg-white font-semibold text-2xl px-10 py-3'>SHOPE WOMEN</button>
</div >
</div>
<div className='bg-black text-white w-full flex h-16 '>
<div className='w-1/2 flex flex-col item-center justify-center'>
    <h1 className='font-bold text-xl'>EASY WORLDWIDE DELIVERY</h1>
    <p>*minimum spends apply</p>
    </div>
    <div className='flex w-1/2; justify-items-center  '>
        <h1 className='font-semibold text-xl'>ASOS DESIGIN and 850+ <br /> brands</h1>
    </div>
</div>
        </div>
    );
};

export default Home;
