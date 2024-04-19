import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import sharebutton from 'react-share'
function Productpage() {
  //     const [id,setid]=useState("hellow");

  //   const a =  localStorage.setItem( "productId", id );
  const productid = sessionStorage.getItem("productid");
  //  console.log(productid)
  const [productImages, setProductImages] = useState();
  const [productdetailes, setProductdetailes] = useState();
  const [bigImage, setBigImage] = useState();

  const product = async () => {
    const responce = await Axios.get(
      `http://localhost:3005/asos/product/${productid}`,{withCredentials:true}
    );
    setProductdetailes(responce.data.product);
    setProductImages(responce.data.product.images);
    setBigImage({ item: responce.data.product.images[0], key: 0 });
    console.log(responce.data);
  };
  useEffect(() => {
    product();
  }, []);
  //--detailes--//

  const initialsate = {
    detailes: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "show":
        return { ...state, detailes: action.name };
      case "hide":
        return { ...state, detailes: null };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialsate);
const [wishlist,setWishlist]=useState(null);
  const fixwishlist=async()=>{
    setWishlist(true);
    await Axios.put(`http://localhost:3005/asos/updatewishlistandcart/${productid}`,{wishlist},{withCredentials:true}).then((responce)=>{
    })
  
  setWishlist(null)
  }
  //------zoom image-//
  const [zoomLevel, setZoomLevel] = useState(100); // Initial zoom level at 100%

  const handleScroll = (event) => {
    const deltaY = event.deltaY;
    const newZoomLevel = zoomLevel + deltaY * 0.1; // Adjust the multiplier to control zoom speed
    setZoomLevel(Math.min(Math.max(10, newZoomLevel), 1000)); // Limit zoom level between 10% and 1000%
  };
  // const handleZoom = (delta) => {
  //   // Adjust zoom level based on scroll delta
  //   const newZoomLevel = zoomLevel + delta * 10; // Adjust the multiplier to control zoom speed
  //   setZoomLevel(Math.min(Math.max(10, newZoomLevel), 1000)); // Limit zoom level between 10% and 1000%
  // };

  //  setid(productid);
  //   console.log(productid,"abcd")
  // //  setid(productid);

  // let discription="New Balance 610 trainers in orange";
  return (
    <div className="flex justify-center gap-5 overflow-hidden py-5">
      {/* <h1>{"hellow"}</h1> 
     <div className='w-60 h-60 rounded-full bg-red-600 'style={{
      clipPath: 'polygon(50% 50%, 0% 100%, 0% 100%, 100% 100%, 100% 100%)'}}>
        
      </div> */}
      <div className="flex flex-col gap-2 w-1/3 ">
        {productImages &&
          Array.isArray(productImages) &&
          productImages.map((item, key) => {
            return (
              <img
                onClick={() => {
                  setBigImage({ item, key });
                }}
                src={item}
                key={key}
                className={`w-16 border-2 p-2 ${
                  bigImage === item && "border-blue-700"
                }`}
                alt="firstimg"
              />
            );
          })}
      </div>
      <div
        className="w-1/3 relative flex justify-center items-center  overflow-auto"
        onWheel={handleScroll}
      >
        {bigImage && (
          <img
            src={bigImage.item}
            className="w-full"
            style={{ width: `${zoomLevel}%`, transition: "width 0.5s" }}
            alt=""
          />
        )}
        <button className="absolute flex w-full justify-between text-3xl">
          <IoIosArrowBack
            onClick={() => {
              if (bigImage.key === 0) {
                setBigImage({
                  item: productImages[productImages.length - 1],
                  key: productImages.length - 1,
                });
              } else {
                setBigImage({
                  item: productImages[bigImage.key - 1],
                  key: bigImage.key - 1,
                });
              }
            }}
          />
          <IoIosArrowForward
            onClick={() => {
              if (bigImage.key === productImages.length - 1) {
                setBigImage({ item: productImages[0], key: 0 });
              } else {
                setBigImage({
                  item: productImages[bigImage.key + 1],
                  key: bigImage.key + 1,
                });
              }
            }}
          />
        </button>
      </div>
      <div className="w-1/3">
        {productdetailes && Object(productdetailes) && (
          <div>
            <h1 className="text-lg">{productdetailes.title}</h1>
            <p className="font-bold text-lg text-slate-600">
              ${productdetailes.price}
            </p>
            <div>
              <p className="flex  ">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </p>
              <div className="bg-blue-500 w-full h-16">
                <p>This item is exicuted fromdiscound codes.</p>
              </div>
              {productdetailes && (
                <p className="flex">
                  <h1 className="font-semibold">Colour:</h1>
                  {productdetailes.colour[0]}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="w-full flex justify-between">
                <h1 className="font-semibold flex items-center">SIZE :</h1>
                <a href="/a#">Size Guide</a>
              </span>
            <div><select name="size" id="" className="border-2 w-full px-2">
              <option onClick={()=>{if(state.detailes==="size"){dispatch({type:"show"})}else{dispatch({type:"show",name:"size"})}}}>please select  your size</option>
               {state.detailes==="size"&&productdetailes&&productdetailes.size.map((item,key)=>{return(<option key={key} className="w-80 text-lg font-medium border-[1px] px-2">UK {item}</option>)})}
            </select>

            </div>
            </div>
            <span className="flex gap-1 px-2 ">
              <button className="w-full bg-green-700 text-lg text-white font-bold rounded  py-1">
                ADD TO BAG
              </button>
              <button onClick={fixwishlist}>🤍</button>
            </span>
            <div className="w-full flex flex-col gap-5 py-5 px-3 border-2">
              <span className="flex items-center">
                <CiDeliveryTruck className="text-5xl" />
                <p>Free delivery on qualifying orders</p>
              </span>
              <p className="flex flex-shrink-0 ">
                View our Delivary & Returns Policy{" "}
                <buttton
                  onClick={() => {
                    navigator.clipboard.writeText("http://localhost:3000/");
                  }}
                >
                  <MdContentCopy />
                </buttton>
              </p>
            </div>
            <div>
              <ul className="px-2">
                <h1 className="font-semibold text-lg flex justify-between border-y-2 items-center ">
                  Product Details
                  <span className="font-normal text-5xl">+</span>
                </h1>
                {<p>{productdetailes.productDetailes}</p>}
              </ul>
              <ul className="px-2">
                <h1 className="font-semibold text-lg flex justify-between border-y-2 items-center">
                  Product Details{" "}
                  <span className="font-normal text-5xl">+</span>
                </h1>
              </ul>
              <ul className="px-2">
                <h1 className="font-semibold text-lg flex justify-between border-y-2 items-center">
                  Product Details{" "}
                  <span className="font-normal text-5xl">+</span>
                </h1>
              </ul>
              <ul className="px-2">
                <h1 className="font-semibold text-lg flex justify-between border-y-2 items-center">
                  Product Details{" "}
                  <span className="font-normal text-5xl">+</span>
                </h1>
              </ul>
              <ul className="px-2">
                <h1 className="font-semibold text-lg flex justify-between border-y-2 items-center">
                  <span className="font-normal text-5xl">+</span>
                </h1>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Productpage;
