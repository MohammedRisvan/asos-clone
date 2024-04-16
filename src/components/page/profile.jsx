import React from 'react'

function Profile() {
  return (
    <div className='flex w-full h-full gap-16'>
      <div  className='flex flex-col bg-white w-80  py-10 justify-between'>
      <div>
        <p>hi./</p>
        <h1 className='font-semibold text-2xl px-5'>Mohammed Risvan</h1>
        </div>
        <ul className='flex flex-col text-xl text-black font-semibold '>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>My Orders</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>Need help?</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>Gift cards &vouchers</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>My details</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>Address book</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>Payment methodes</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>Contact preferances</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>Social accounts</li>
            <li className='w-full  py-3 px-5 hover:bg-gray-900 hover:text-white'>Sign out</li>
        </ul>
        </div>
      <div className='w-svw bg-white h-screen' >
      <div className=''>

      </div>
      </div>
    </div>
  )
}

export default Profile
