
import React from 'react';
import { Outlet } from 'react-router-dom';

const Register = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-5 w-full h-auto py-24   bg-slate-100'>
<h1 className='font-bold text-5xl'>asos</h1>      
<div className='sm:w-1/2 w-full'>
<Outlet/>
</div>
    </div>
  )
}

export default Register

