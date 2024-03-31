import Axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Otp() {
  const [value,setValue]=useState("");

  const serverpass=async()=>{
  try {
    await Axios.post("http://localhost:3005/asos/register",{otp:value},{withCredentials:true})
    const userdata=localStorage.getItem('asosuser');
    localStorage.removeItem("asosuser");
    console.log(userdata);

  } catch (error) {
    console.log(error)
  }
  }
  const verify=()=>{
    if(value.length>3){
      console.log(`Otp is ${value}`);
      serverpass();
  }
}
  return (
    <div className='bg-blue-300 h-screen flex flex-col items-center gap-5'>
      <h1 className='font-bold text-2xl'>Please Enter  otp in your EMAIL</h1>
      <input type='text' className='bg-slate-50' onChange={(e)=>{setValue(e.target.value)}}/>
      <button onClick={verify} className='bg-slate-900 px-3 py-1 w-64 text-white text-xl font-semibold' >verify</button>
    </div>
  )
}

export default Otp;
