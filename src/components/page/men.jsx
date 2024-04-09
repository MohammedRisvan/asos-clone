import React from 'react'
import image from "../images/carosel2.jpg";
import branda from '../images/barnda.jpg';
import brandb from '../images/brandb.jpg';
import brandc from '../images/brnad.jpg';
import brand from '../images/brandc.jpg';
import brande  from '../images/brande.jpg';
import brandf from "../images/brandf.jpg";



const Men = () => {
  return (
    <div className='w-full h-2/5 bg-white flex justify-between py-5 px-14  text-slate-600'>
      <div className='font-normal flex flex-col gap-2 '>
        <h1 className='font-bold text-lg'>NEW PRODUCTS</h1>
        <p>View all</p>
        <p>Clothing</p>
        <p>Shoes</p>
        <h2 className='font-bold text-sm'>New in:Today</h2>
        <h2 className='font-bold text-sm'>New in:Selling Fast</h2>
        <p>T-Shirts &Vests</p>
        <p>Jeans & Trousers</p>
        <p>Shorts</p>
        <p>Swimwear</p>
        <p>Accessories</p>
        <p>Face + Beauty</p>
        <p>Sportware</p>
        <p>Innerware</p>
      </div>
      <div className='flex flex-col gap-3 font-normal border-x-2 px-14'>
        <h1 className='font-bold text-lg'>SHOW SPRING</h1>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Spring Outfits</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Holiday Fits</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Tailoring</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Linen</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Accessories</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Swimwears</p>
        </label><hr className='ml-10 w-full'/>
      </div>
      <div className='flex flex-col gap-4 font-normal'>
        <h1 className='font-bold text-lg'>BRAND DROPS</h1>
        <label  className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Spring Outfits</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Spring Outfits</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Spring Outfits</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Spring Outfits</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Spring Outfits</p>
        </label><hr className='ml-10 w-full'/>
        <label className='flex gap-10 items-center'>
        <img src={image}className='w-10 h-10 rounded-full p-1 border border-slate-300' alt='img'/>
        <p>Spring Outfits</p>
        </label><hr className='ml-10 w-full'/>
      </div>
      <div className='flex flex-col gap-10'>
        <h1 className='font-bold text-lg'>NEW EDITS</h1>
        <img src={image} className='w-64' alt='i' />
        <img src={image} className='w-64' alt="a"/>
      </div>
    </div>
  )
}

export default Men

export const Clothing=()=>{
return(
  <div className='w-full h-2/5 bg-slate-50 justify-between flex justify- py-5 px-14  text-slate-600'>
  <div>
  <h1 className='font-bold text-lg'>SHOP BY PRODUCT</h1>
 <ul className='grid  grid-flow-col grid-rows-12 gap-x-40 gap-y-7 h-60' style={{ gridTemplateRows: "repeat(13, minmax(0, 1fr))"}}>
<li className='font-bold text-sm'>Top Rated Clothing</li>
<li>New in</li>
<li>T-Shirts&Vests</li>
<li className='font-bold text-sm'>But 3+T-shirts,Save 10%</li>
<li>Hoodies & Sweatshirts</li>
<li>Jeans</li>
<li>Jumpers & Cardigans</li>
<li> Shirts</li>
<li>Trousers & Chinos</li>
<li>Suits & Talioring</li>
<li>Carogo Trousers</li>
<li>Co-ords</li>
<li>Desiginer</li>
<li>Exslusives at ASOS</li>
<li>Jackets & Coats</li>
<li>Joggers</li>
<li>last chanceto buy</li>
<li>Lounge wear</li>
<li>Multi packs</li>
<li>Polo  shirts</li>
<li>Shorts </li>
<li>Socks</li>
<li>Sportswear</li>
<li>Swimwear</li>
<li>Tracksuits</li>
<li>Inners</li>
  </ul>
    </div>    
  <div className='flex font-bold gap-10'>
  <div className='flex flex-col gap-5  border-x-2 border-black ' >
    <h1>SHOPE BY BODY FIT</h1>
    <ul className='flex gap-10 font-normal px-20 py-5'>
      <li className='flex flex-col items-center'>
        <img src={image} className='w-16 h-16 rounded-full p-1 border-2 border-slate-600' alt='iamage'/>
        <p>Plus Size</p>
      </li>
      <li className='flex flex-col items-center'>
        <img src={image} className='w-16 h-16 rounded-full p-1 border-2 border-slate-600' alt='iamage'/>
        <p>Tall</p>
      </li>
    </ul>
  </div>
  {/* <div className='h-full bg-slate-600 w-0.5 '/> */}
  <div className='flex flex-col gap-10'>
    <h1>SHOPE BY EDIT</h1>
    <ul className='flex flex-col gap-2 font-normal'>
      <li className="flex gap-10 items-center">
        <img src={image} className='w-12 h-12 rounded-full p-1 border-2 border-slate-600'alt='images'/>
        <p>Spring styles</p>
      </li>
      <hr className='ml-16' />
      <li className="flex gap-10 items-center">
        <img src={image} className='w-12 h-12 rounded-full p-1 border-2 border-slate-600'alt='images'/>
        <p>Basics</p>
      </li>
      <hr className='ml-16' />
        
      <li className="flex gap-10 items-center">
        <img src={image} className='w-12 h-12 rounded-full p-1 border-2 border-slate-600'alt='images'/>
        <p>Occasionwears</p>
      </li>
      <hr className='ml-16' />
      <li className="flex gap-10 items-center">
        <img src={image} className='w-12 h-12 rounded-full p-1 border-2 border-slate-600'alt='images'/>
        <p>Denim</p>
      </li>
      <hr className='ml-16' />
      <li className="flex gap-10 items-center">
        <img src={image} className='w-12 h-12 rounded-full p-1 border-2 border-slate-600'alt='images'/>
        <p>Festival</p>
      </li>
      <hr className='ml-16' />
      <li className="flex gap-10 items-center">
        <img src={image} className='w-12 h-12 rounded-full p-1 border-2 border-slate-600'alt='images'/>
        <p>Holiday</p>
      </li>
      <hr className='ml-16' />
    </ul>
  </div>
  </div>
  </div>
)
}
export const Trending  = () => {
  return(
    <div className='flex gap-5 p-5 w-full h-full bg-slate-50'>
      <img src={image}alt='dsfh'className='w-48 border-2 p-px hover:border-blue-500'/>
      <div className='h-60 w-px bg-slate-500'/>
      <img src={image}alt='dsfh'className='  w-48 border-2 p-px hover:border-blue-500'/>
      <div className='h-60 w-px bg-slate-500'/>
      <img src={image}alt='dsfh'className='  w-48 border-2 p-px hover:border-blue-500'/>
      <div className='h-60 w-px bg-slate-500'/>
      <img src={image}alt='dsfh'className='w-48 border-2 p-px hover:border-blue-500'/>
    </div>
  )
}
export const Menpage=()=>{
  return(
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-col bg-rose-600 items-center gap-5 h-full p-10'>
        <button className='px-12 py-1 bg-white rounded-3xl font-[650] text-2xl'>SALE</button>
        <h1 className='font-extrabold text-6xl -skew-x-6'>NOW UP TO 70% OFF</h1>
        <h2 className='font-[650] text-3xl '>BIGGER DISCOUNT!</h2>
        <p className='text-sm'>Limited only Selected Styles marked down as shown.</p>
        <ul className='flex gap-3 pt-10'>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src={image}alt='' className='h-40 w-40'/>
          <p>SHOES & SNEKERS</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>          
          <img src={image}alt='' className='h-40 w-40'/>
          <p>HODIES & SWEATS</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src={image}alt='' className='h-40 w-40'/>
          <p>TROUSERS</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src={image}alt='' className='h-40 w-40'/>
          <p>TEES</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>            
          <img src={image}alt='' className='h-40 w-40'/>
          <p>SMART STUFF</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src={image}alt='' className='h-40 w-40'/>
          <p>SPORTS WEAR</p>
          </li>
        </ul>
        <button className='px-10 py-1 text-lg font-semibold bg-white duration-700 hover:bg-black hover:text-white'>VIEW ALL</button>
      </div>
      <div>
      </div>
      <div>
        <div className="relative flex items-end justify-center ">
          <button className='absolute bg-white px-5 py-5 font-bold text-5xl mb-28 mr-10'>Shop now</button>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2024/april/02-gbl/2024_homepage_hero-1_mw_1258x600.jpg" alt="" />
        </div>
        <ul className='flex'>
          <li className='flex flex-col items-center gap-2'>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2024/april/02-gbl/mw_global_denim_moment_870x1110.jpg" alt="" />
          <h3 className='font-bold'>NEW IN:DENIM</h3>
          <p>Ft.jeans, jorts and more</p>
          </li>
          <li className='flex flex-col items-center gap-2'>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2024/april/02-gbl/2024_homepage_moment_ww_best-dressed_870x1110_mw.jpg" alt="" />
          <h3 className='font-bold'>BAST DRESSED</h3>
          <p>Every occuasion, covered</p>
          </li>
          <li className='flex flex-col items-center gap-2'>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2024/april/02-gbl/mw_global_summer_trainers_moment_870x1110.jpg" alt="" />
          <h3 className='font-bold'>SNEAKERS</h3>
          <p>Our summer , selects</p>
          </li>
          <li className='flex flex-col items-center gap-2'>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2024/april/02-gbl/mw_global_shirts_moment_870x1110.jpg" alt="" />
          <h3 className='font-bold'>NEW IN :SHIRTS</h3>
          <p>Button-downs upgrades</p>
          </li>
        </ul>
        <div className='flex items-center  w-full p-48 gap-5'>
          <div className='flex flex-col items-center gap-5'>
            <img className='' src="https://content.asos-media.com/-/media/homepages/mw/2024/april/02-gbl/mw_global_hotri_culture_moment_870x1110.jpg" alt="" />
            <h3 className='font-bold text-3xl'>OFF-DUTY STAPLES</h3>
            <p className='font-light text-2xl'>Spring styles</p>
            <button className='font-bold text-xl px-5 py-3 border-[3px] transition duration-700 hover:bg-black hover:text-white border-black'>SHOP NOW</button>
          </div>
          <div className='flex flex-col items-center gap-5'>
            <img className='' src="https://content.asos-media.com/-/media/homepages/mw/2024/april/02-gbl/mw_global_topman_moment_870x1110.jpg" alt="" />
            <h3 className='font-bold text-3xl'>TOPMAN</h3>
            <p className='font-light text-2xl'>Smart-ish vibes</p>
            <button className='font-bold text-xl px-5 py-3 border-[3px]  duration-700 hover:bg-black hover:text-white border-black'>SHOP NOW</button>
          </div>
        </div>
      </div>
    <div className='bg-red-500 flex flex-col items-center py-10 gap-5'>
      <button className='text-3xl border-4 px-10 py-1 font-bold rounded-full border-black'>THE ASOS APP</button>
      <h2 className='font-bold text-4xl'>Fave piece sold out? </h2>
      <h2 className='font-bold text-4xl'> Get back-in-stock alerts on the app</h2>
      <button className='bg-black text-white font-bold text-3xl px-10 py-3 rounded-3xl'> DOWNLOAD NOW</button>
    </div>
    <div className='flex items-center flex-col'>
      <h2 className='font-bold text-3xl'>TRENDING BRANDS</h2>
      <div className='flex py-3'>
        <img src={branda} alt="" />
        <img src={brandb} alt="" />
        <img src={brandc} alt="" />
        <img src={brand} alt="" />
        <img src={brande} alt="" />
        <img src={brandf} alt="" />
      </div>
    </div>
    </div>
  )
}
