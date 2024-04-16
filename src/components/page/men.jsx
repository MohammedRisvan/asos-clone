import React from 'react'
import image from "../images/carosel2.jpg";
import branda from '../images/barnda.jpg';
import brandb from '../images/brandb.jpg';
import brandc from '../images/brnad.jpg';
import brand from '../images/brandc.jpg';
import brande  from '../images/brande.jpg';
import brandf from "../images/brandf.jpg";




export const Menpage=()=>{
  return(
    <div className='flex flex-col w-full h-full gap-5'>
      <div className='flex flex-col bg-gradient-to-b from-violet-700 to-blue-400 items-center gap-5 h-full p-10'>
        <button className='px-12 py-1 bg-white rounded-3xl font-[650] text-2xl'>SALE</button>
        <h1 className='font-extrabold text-6xl -skew-x-6'>NOW UP TO 70% OFF</h1>
        <h2 className='font-[650] text-3xl '>BIGGER DISCOUNT!</h2>
        <p className='text-sm'>Limited only Selected Styles marked down as shown.</p>
        <ul className='flex gap-3 pt-10'>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src="https://images.asos-media.com/products/adidas-originals-superstar-xlg-trainers-in-collegiate-burgundy/205087142-1-burgundy?$n_640w$&wid=513&fit=constrain"alt='' className='h-40 w-40'/>
          <p>SHOES & SNEKERS</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>          
          <img src="https://images.asos-media.com/products/asos-design-oversized-hoodie-in-dark-green-with-photographic-outdoors-print-sleeve-embroidery/205016511-2?$n_640w$&wid=513&fit=constrain"alt='' className='h-40 w-40'/>
          <p>HODIES & SWEATS</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src="https://images.asos-media.com/products/bershka-washed-wide-cargo-in-grey/205557595-1-grey?$n_640w$&wid=513&fit=constrain"alt='' className='h-40 w-40'/>
          <p>TROUSERS</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src="https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-red-with-back-cocktail-print/205462914-1-red?$n_640w$&wid=513&fit=constrain"alt='' className='h-40 w-40'/>
          <p>TEES</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>            
          <img src="https://images.asos-media.com/groups/asos-design-slim-boxy-suit-in-gray/205976081-group-1?$n_640w$&wid=513&fit=constrain"alt='' className='h-40 w-40'/>
          <p>SMART STUFF</p>
          </li>
          <li className='flex flex-col bg-white items-center font-semibold'>
          <img src="https://images.asos-media.com/products/nike-football-academy-dri-fit-panelled-half-zip-drill-top-in-navy/205284020-1-navy?$n_640w$&wid=513&fit=constrain"alt='' className='h-40 w-40'/>
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
    <div className='bg-gradient-to-b from-blue-600 to-red-600 flex flex-col items-center py-10 gap-5'>
      <button className='text-3xl border-4 px-10 py-1 font-bold rounded-full border-black'>THE ASOS APP</button>
      <h2 className='font-bold text-4xl'>Fave piece sold out? </h2>
      <h2 className='font-bold text-4xl'> Get back-in-stock alerts on the app</h2>
      <button className='bg-black text-white font-bold text-3xl px-10 py-3 rounded-3xl'> DOWNLOAD NOW</button>
    </div>
    <div className='flex items-center flex-col'>
      <h2 className='font-bold text-3xl'>TRENDING BRANDS</h2>
      <div className='flex '>
        <img className='w-60' src={branda} alt="" />
        <img className='w-60' src={brandb} alt="" />
        <img className='w-60' src={brandc} alt="" />
        <img className='w-60' src={brand} alt="" />
        <img className='w-60' src={brande} alt="" />
        <img className='w-60' src={brandf} alt="" />
      </div>
    </div>
    </div>
  )
}
