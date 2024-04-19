import React, { useReducer } from "react";
import { Outlet } from "react-router-dom";
import image from "../images/carosel2.jpg";

const initialstate = {
  // newin: false,
  ishover:null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { state, ishover: action.name };
    case "HIDE":
      return { ...state, ishover: null };
    default:
      return state;
  }
};

function Manlayout() {
  // const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <MenNavbar />
      <div className="flex flex-col ">
        
        <Offernav />
        <Outlet />
      </div>
    </div>
  );
}
const Offernav = () => {
  return (
    <div className=" w-full h-fit flex items-center justify-between  px-2 font-bold bg-sky-300">
      <button className="px-2 py-1 border-2 border-black rounded ">WOMEN</button>
      <h1 className=" w-60 h-16 mt-0">
        EXTRA 40% OFF SALE PICKS* LAST CHANCE TO BUY!
        <br /> <span>With code:</span>LASTCHANCE
      </h1>
      <button className="px-2 py-1 border-2 border-black rounded">MEN</button>
    </div>
  );
};
export const MenNavbar = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
    <div className="h-16  bg-slate-700  w-full flex items-center text-white px-5 subdiv  ">
      <p className="py-5 px-5 bg-red-600 -skew-x-12 hover:bg-white hover:text-black h-full">
        Sales
      </p>
      <p onMouseEnter={()=>{dispatch({type:"SHOW",name:"newin"})}}
       onMouseLeave={()=>{dispatch({type:"HIDE"})}}
       className={`py-5 px-3 h-full hover:bg-white  hover:text-black`}>
       <p>New In</p> 
       <div className="flex absolute items-center  justify-center w-full z-10">
       {state.ishover==="newin"&&<NewIn />}  
       </div>
      </p>
     
     
      <p
      onMouseEnter={()=>{dispatch({type:"SHOW",name:"clothing"})}}
      onMouseLeave={()=>{dispatch({type:"HIDE"})}}
       className="py-5 px-3 hover:bg-white hover:text-black h-full">
        <p>Clothing</p>
      </p>
      <p className="py-5 px-3 hover:bg-white hover:text-black "
      onMouseEnter={()=>{dispatch({type:"SHOW",name:"trending"})}}
      onMouseLeave={()=>{dispatch({type:"HIDE"})}}
      >Trending</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">Dress</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black"
       onMouseEnter={()=>{dispatch({type:"SHOW",name:"shoes"})}}
      onMouseLeave={()=>{dispatch({type:"HIDE"})}}
      >Shoe</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">Accessories</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">Face + Body</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">Brands</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">SportsWear</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">TopShop</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">MarketPlace</p>
      <p className="py-5 px-3 hover:bg-white hover:text-black">Sale</p>
    </div>
    <div className="flex items-center fixed justify-center w-full z-10">    
    {state.ishover==="clothing"&&<Clothing />}
          {state.ishover==="trending"&&<Trending onMouseEnter={()=>{dispatch({type:"SHOW",name:"trending"})}}/>}
          {state.ishover==="shoes"&&<Shoes/>}
        </div>
    </div>
  );
};

export default Manlayout;
export const NewIn = () => {
  return (
    <div className="w-5/6 h-2/5 bg-white flex justify-between py-5 px-5 text-slate-600">
      <div className="font-normal flex flex-col gap-2 ">
        <h1 className="font-bold text-lg">NEW PRODUCTS</h1>
        <p>View all</p>
        <p>Clothing</p>
        <p>Shoes</p>
        <h2 className="font-bold text-sm">New in:Today</h2>
        <h2 className="font-bold text-sm">New in:Selling Fast</h2>
        <p>T-Shirts &Vests</p>
        <p>Jeans & Trousers</p>
        <p>Shorts</p>
        <p>Swimwear</p>
        <p>Accessories</p>
        <p>Face + Beauty</p>
        <p>Sportware</p>
        <p>Innerware</p>
      </div>
      <div className="flex flex-col gap-3 font-normal border-x-2 px-14">
        <h1 className="font-bold text-lg">SHOW SPRING</h1>
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/mw_global_tm_spring_480x480_1?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>Spring Outfits</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/summer_holiday_outfits_sb_480x480?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>Holiday Fits</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/mw_suits_sb_3m_210324?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>Tailoring</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/mw_uk_hero_sb_04_480x480_05092023?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>Linen</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/mw_global_sunglasses_spring_480x480_1?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>Accessories</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/mw_spring_swimwear_480x480_1?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>Swimwears</p>
        </label>
        <hr className="ml-10 w-full" />
      </div>
      <div className="flex flex-col gap-4 font-normal">
        <h1 className="font-bold text-lg">BRAND DROPS</h1>
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/mw_uk_newin_asosdesign_3m_117590750?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>ASOS DESIGN</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={'https://images.asos-media.com/navigation/mw_uk_newin_adidas_203m_121949817?&$n_240w$'}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>adidas</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={"https://images.asos-media.com/navigation/mw_newin_britishbrands_3M_124199441?&$n_240w$"}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>British Brands</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={"https://images.asos-media.com/navigation/mw_newin_newbalance_3M_121808719?&$n_240w$"}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>New Balance</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={"https://images.asos-media.com/navigation/mw_newinnewlook_3M_127354423?&$n_240w$"}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>New look</p>
        </label>
        <hr className="ml-10 w-full" />
        <label className="flex gap-10 items-center">
          <img
            src={"https://images.asos-media.com/navigation/mw_newin_thenorthface_3M_120001226?&$n_240w$"}
            className="w-10 h-10 rounded-full p-1 border border-slate-300"
            alt="img"
          />
          <p>The North Face</p>
        </label>
        <hr className="ml-10 w-full" />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-lg">NEW EDITS</h1>
        <img src={'https://images.asos-media.com/navigation/uk_mw_hero_01_1680x876_110424?&$n_320w$'} className="w-64" alt="i" />
        <img src={'https://images.asos-media.com/navigation/mw_global_summer_shop_1680x876_2?&$n_320w$'} className="w-64" alt="a" />
      </div>
    </div>
  );
};

 const Clothing = () => {
  return (
    <div className="w-5/6 h-2/5 bg-slate-50 justify-between flex justify- py-5 px-5  text-slate-600">
      <div>
        <h1 className="font-bold text-lg">SHOP BY PRODUCT</h1>
        <ul
          className="grid  grid-flow-col grid-rows-12 gap-x-40 gap-y-7 h-60"
          style={{ gridTemplateRows: "repeat(13, minmax(0, 1fr))" }}
        >
          <li className="font-bold text-sm">Top Rated Clothing</li>
          <li>New in</li>
          <li>T-Shirts&Vests</li>
          <li className="font-bold text-sm">But 3+T-shirts,Save 10%</li>
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
          <li>Polo shirts</li>
          <li>Shorts </li>
          <li>Socks</li>
          <li>Sportswear</li>
          <li>Swimwear</li>
          <li>Tracksuits</li>
          <li>Inners</li>
        </ul>
      </div>
      <div className="flex font-bold gap-10">
        <div className="flex flex-col gap-5  border-x-2 border-black ">
          <h1>SHOPE BY BODY FIT</h1>
          <ul className="flex gap-10 font-normal px-20 py-5">
            <li className="flex flex-col items-center">
              <img
                src={'https://images.asos-media.com/navigation/mw_uk_clothing_tall_2m_132163877?&$n_240w$&quot'}
                className="w-16 h-16 rounded-full p-1 border-2 border-slate-600"
                alt="iamage"
              />
              <p>Plus Size</p>
            </li>
            <li className="flex flex-col items-center">
              <img
                src={'https://images.asos-media.com/navigation/mw_uk_clothing_plussize_2m_120975115?&$n_240w$&quot'}
                className="w-16 h-16 rounded-full p-1 border-2 border-slate-600"
                alt="iamage"
              />
              <p>Tall</p>
            </li>
          </ul>
        </div>
        {/* <div className='h-full bg-slate-600 w-0.5 '/> */}
        <div className="flex flex-col gap-10">
          <h1>SHOPE BY EDIT</h1>
          <ul className="flex flex-col gap-2 font-normal">
            <li className="flex gap-10 items-center">
              <img
                src={"https://images.asos-media.com/navigation/mw_clothing_holiday_3m_118685877?&$n_240w$"}
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-600"
                alt="images"
              />
              <p>Holiday</p>
            </li>
            <hr className="ml-16" />
            <li className="flex gap-10 items-center">
              <img
                src={"https://images.asos-media.com/navigation/mw_basics_app_150324?&$n_240w$"}
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-600"
                alt="images"
              />
              <p>Basics</p>
            </li>
            <hr className="ml-16" />

            <li className="flex gap-10 items-center">
              <img
                src={"https://images.asos-media.com/navigation/mw_gbl_clothing_occasionwear_flo_105399272_3m?&$n_240w$"}
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-600"
                alt="images"
              />
              <p>Occasionwears</p>
            </li>
            <hr className="ml-16" />
            <li className="flex gap-10 items-center">
              <img
                src={"https://images.asos-media.com/navigation/denim_mw_3m_02022024?&$n_240w$"}
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-600"
                alt="images"
              />
              <p>Denim</p>
            </li>
            <hr className="ml-16" />
            <li className="flex gap-10 items-center">
              <img
                src={"https://images.asos-media.com/navigation/mw_NL_Clothing_Holly_3m_121415612?&$n_240w$"}
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-600"
                alt="images"
              />
              <p>Festival</p>
            </li>
            <hr className="ml-16" />
            <li className="flex gap-10 items-center">
              <img
                src={image}
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-600"
                alt="images"
              />
              <p>Holiday</p>
            </li>
            <hr className="ml-16" />
          </ul>
        </div>
      </div>
    </div>
  );
};
const Trending = () => {
  return (
    <div className="flex gap-5 p-5 w-5/6 h-full bg-slate-50">
      <img
        src={"https://images.asos-media.com/navigation/mw_basics_trending_150324?&$n_320w$"}
        alt="dsfh"
        className="w-48 border-2 p-px hover:border-blue-500"
      />
      <div className="h-60 w-px bg-slate-500" />
      <img
        src={"https://images.asos-media.com/navigation/newin_Streetwear_220224?&$n_320w$"}
        alt="dsfh"
        className="  w-48 border-2 p-px hover:border-blue-500"
      />
      <div className="h-60 w-px bg-slate-500" />
      <img
        src={"https://images.asos-media.com/navigation/denim_MW_220224?&$n_320w$"}
        alt="dsfh"
        className="  w-48 border-2 p-px hover:border-blue-500"
      />
      <div className="h-60 w-px bg-slate-500" />
      <img
        src={'https://images.asos-media.com/navigation/offdutystaples_030424?&$n_320w$'}
        alt="dsfh"
        className="w-48 border-2 p-px hover:border-blue-500"
      />
    </div>
  );
};
const Shoes=()=>{
  return(
  <div className="w-5/6 h-2/5 bg-white flex justify-between py-5 px-5 text-slate-600">
    <div className="flex flex-col gap-2">
      <h1 className="font-[700] text-lg text-slate-500">SHOP BY PRODUCT</h1>
      <h2 className="font-semibold text-base">Top Rated Shoes</h2>
      <h2 className="font-semibold text-base">Best sellers</h2>
      <p>View all</p>
      <p>New in</p>
      <p>Trainers</p>
      <p>Sandals</p>
      <p>Boots</p>
      <p>Loafers</p>
      <p>Running Trainers</p>
      <p>Shoes</p>
      <p>Sliders & Flip flops</p>
      <p>Slippers</p>
      <p>Socks</p>
    </div>
    <div className="shoeshopdiv flex flex-col gap-3 ">
      <h1 className="font-[700] text-lg text-slate-500">SHOP BY BRAND</h1>
      <p>
        <img src={"https://images.asos-media.com/navigation/mw_GBL_Shoes_Boots_2M_132462856?&$n_240w$"} alt="" />
        ASOS DESIGN
      </p>
      <p>
        <img src={"https://images.asos-media.com/navigation/mw_gbl_shoes_newbalance_3M_116525069?&$n_240w$"} alt="" />
        New Balance
      </p>
      <p>
        <img src={"https://images.asos-media.com/navigation/mw_trainers_onrunning_3M_117429267?&$n_240w$"} alt="" />
        On Running
      </p>
      <p><img src={"https://images.asos-media.com/navigation/mw_gbl_shoes_adidas_3M_123114802?&$n_240w$"} alt="" />
      adidas
      </p>
      <p>
        <img src={"https://images.asos-media.com/navigation/mw_gbl_shoes_asics_3M_120053713?&$n_240w$"} alt="" />
        Asics
      </p>
      <p>
        <img src={"https://images.asos-media.com/navigation/mw_gbl_shoes_drmartens_3M_123973371?&$n_240w$"} alt="" />
        Dr Martens
      </p>
    </div>
    <div className="flex flex-col gap-5">
      <h1 className="font-[700] text-lg text-slate-500">SHOP BY TRAINER STYLE</h1>
      <ul className="flex flex-col gap-2">
        <li>adidas Originals Campus</li>
        <li>adidas Originals Gazelle</li>
        <li>adidas Originals stan Smith</li>
        <li>New Balance 550</li>
        <li>New Balance 530</li>
        <li>New Balance 527</li>
        <li>New Balance 574</li>
        <li>On Cloudnova</li>
        <li>On Cloudmonster</li>
        <li>Vans Old Skool</li>
        <li>Reebok Classic</li>
      </ul>
    </div> 
    <div className="font-bold text-xl w-80 h-full flex flex-col gap-3">
      <div className="flex bg-cover bg-no-repeate h-32 px-10 items-center justify-start w-full " style={{backgroundImage:`url(${"https://images.asos-media.com/navigation/mw_au_shoes_summershoes_4WL_125403686?&$n_320w$"})`}}>
        <p>SANDALS</p>
         {/* <img  src= alt="" /> */}
      </div>
      <div className="flex bg-cover bg-no-repeate h-32 px-10 items-center justify-start w-full" style={{backgroundImage:`url(${"https://images.asos-media.com/navigation/mw_GBL_Shoes_Black_Trainers_4WL_127380178?&$n_320w$"})`}}>
        <p>BLACK <br/> TRAINERS</p>
      {/* <img src= alt="" /> */}
      </div>
    <div className="flex bg-cover bg-no-repeate h-32 px-10 items-center justify-start w-full" style={{backgroundImage:`url(${"https://images.asos-media.com/navigation/mw_gbl_shoes_smartshoes_4WL_125058443?&$n_320w$"})`}}>
      <p>OCCATION <br />SHOES</p>
      {/* <img src= alt="" /> */}
    </div>
    </div>
  </div>)
}
