import React, { useState } from 'react';

const Login = () => {
  const [show,setShow]=useState("password")
  return (
    <div className='w-full bg-white flex flex-col justify-center gap-10 items-center px-5 py-10 rounded'>
       <div className='flex  gap-5'>
            <button className='border border-b-slate-700 px-5 ' href>Join</button>
            <div className='w-0.5 h-10 bg-slate-700'/>
            <button className='border border-b-blue-700 px-5 '>Sign In</button>
        </div>
        <form className='flex flex-col gap-3'>
          <label>
            EMAIL ADDRESS :
          </label>
          <input type='email'className='border border-black'/>
          <label>
            PASSWORD :
          </label>
          <label className='  px-3 flex border border-black'>
            <input type={show} className='w-full h-full  inline' />
            <button type='button' className=""onClick={()=>{show==="password"?setShow("text"):setShow("password")}}>s</button>
            </label>
        </form>
        <div className='flex flex-col '>
            <button type='button' className='bg-gray-950 text-white w-full h-full'>SIGN IN</button>
            <a >Forget Password?</a>
        </div>
    </div>
  )
}

export default Login
