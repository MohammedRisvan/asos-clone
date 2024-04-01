import Axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Otp() {
  const [value,setValue]=useState("");
  const navigate=useNavigate();
  const serverpass=async()=>{
  try {
    const userdata=localStorage.getItem('asosuser');
   const serverdata=await Axios.post("http://localhost:3005/asos/register",{otp:value,userdata},{withCredentials:true})
    const {success,error}=serverdata.data;
   if(success==="user created success"){
     toast.success(success)
     navigate("/signin")
   }else{
    toast.error(error);
   }
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
  toast.error("your full otp please enter  ")
  return;
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
