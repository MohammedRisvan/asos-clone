import React from 'react'

function Profile() {
  return (
    <div>
      <div  className='flex flex-col bg-white w-64 px-5 py-10 gap-10'>
      <div>
        <p>hi./</p>
        <h1 className='font-semibold text-2xl'>Mohammed Risvan</h1>
        </div>
        <ul className='flex flex-col text-lg text-black '>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>My Orders</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>Need help?</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>Gift cards &vouchers</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>My details</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>Address book</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>Payment methodes</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>Contact preferances</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>Social accounts</li>
            <li className='w-full  py-3 hover:bg-gray-900 hover:text-white'>Sign out</li>
        </ul>
        </div>
      <div  ></div>
    </div>
  )
}

export default Profile
