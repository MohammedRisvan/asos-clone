import React, { useState } from 'react'

const Updatepassword = () => {
    const [password,setPassword]=useState({
        password:"",
        conformPassword:"",

    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setPassword({...password,name:value});

    }
  return (
    <div className='bg-white flex-col items-center justify-center py-5 px-10 pl-64'>
        <h1 className='font-semibold text-xl'>Create  a new password</h1>
      <form className='flex flex-col gap-5'>
        <label >New Password: </label>
        <label><input type="password" name="password"className='border border-2  border-black h-7 px-2 py-3 placeholder:text-blue-400'placeholder='password' onChange={handleChange}/>s</label>
        <label >Conferm Password:</label>
        <label><input type='password' className='border border-2  border-black h-7 px-3 py-2'placeholder='password'/>s</label>
        <button className='flex gap-10'><button className='bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded-lg text-white text-sembold '>Submit</button>
        <button className='bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded-lg text-white text-sembold '>cancel</button></button>
      </form>
    </div>
  )
}

export default Updatepassword
