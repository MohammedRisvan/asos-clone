import React, { useState } from 'react'

function Otp() {
  const [value,setValue]=useState("");
  const verify=()=>{
    if(value.length>0){
      alert(`Otp is ${value}`);
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

export default Otp
