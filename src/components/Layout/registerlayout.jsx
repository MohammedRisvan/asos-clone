// import React, { useState } from 'react';
// // import ebay from "../images/ebay.png";
// // import businessimg from "../images/profilebusiness.jpg";
// // import profile from "../images/profilepersonal.jpg";

// function Register() {
//   const [business,setBusiness]=useState(true)
//   const [requird,setRequird]=useState(false);
//   return (
//     <div className='flex flex-col py-5 px-10'>
//       <div className='flex justify-between '>
//         {/* <img className='h-10' src={ebay}/> */}
//         <a href="">Already have an account? Sign in</a>
//       </div>
//       <div className='w-full h-full py-10 px-5 flex justify-center gap-10 '>
//         {business?<img className='h-50 rounded-xl'>:<img  className='h-50 rounded-xl' />}
//         <div className=' flex flex-col  gap-5'>
//           <h1 className='text-5xl font-bold'>Create an account</h1>
//           <button className='w-full border border-slate-700 flex  rounded-full'>
//           <button className={`w-1/2 ${!business && "bg-black rounded-full text-white"}`} onClick={()=>{setBusiness(false)}}>Personal</button>
//           <button className={`w-1/2 ${business && "bg-black rounded-full text-white"}`} onClick={()=>{setBusiness(true)}}>Business</button>
//           </button><div className='flex gap-3 w-full'>
//           <input className='border border-r-slate-700 h-10 rounded-lg py-2 px-3 w-1/2'  name='firestname'  placeholder='First Name' />
//           <input className='border border-r-slate-700 h-10 rounded-lg py-2 px-3 w-1/2' name="lastname"placeholder='Last Name' /> </div>
//           <input className='border border-r-slate-700 h-10 rounded-lg py-2 px-3 w-ful '  name="email" placeholder='Email' />
//           <input className='border border-r-slate-700 h-10 rounded-lg py-2 px-3 w-full'  name='password' placeholder='Password' />          
//         <p>By selecting Create personal account, you agree to our User<br/> Agreement and acknowledge reading our User Privacy Notice.</p>
//         <button className={`py-2 px-3 text-white font-semibold ${requird?'bg-black':'bg-slate-600'}`}>Create Personal account</button>
//         <p className='flex w-full items-center'><hr className='w-1/4'/>or continue with <hr className='w-1/4' /></p>
//         </div>
//       {/* </div> */}
//      {/* </div> */}
//   )
// }

// export default Register
import React from 'react';
import { Outlet } from 'react-router-dom';

const Register = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-5 w-full h-auto py-10 bg-blue-300'>
<h1 className='font-bold text-5xl'>asos</h1>      
<div className='sm:w-1/2 w-full'>
<Outlet/>
</div>
    </div>
  )
}

export default Register

