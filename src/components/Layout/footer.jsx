import React from 'react'

function Footer() {
  return (<div>
    <div className='w-full bg-white'>

    </div>
    <div className='flex w-full  py-20  bg-slate-200 justify-around items-start'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-lg'>HELP & INFORMATION</h1>
            <p className='hover:text-blue-800'>Help</p>
            <p className='hover:text-blue-800'>Trackorder</p>
            <p className='hover:text-blue-800'>Delevary & returns</p>
            <p className='hover:text-blue-800'>Sitmap</p>
        </div>
        <div  className='flex flex-col gap-2'>
            <h1 className='font-semibold text-lg'>ABOUT ASOS</h1>
            <p className='hover:text-blue-800'>About us</p>
            <p className='hover:text-blue-800'>Careers at ASOS</p>
            <p className='hover:text-blue-800'>Corporate responsibility</p>
            <p className='hover:text-blue-800'>Investors' site</p>
        </div>
        <div  className='flex flex-col gap-2'>
           <h1 className='font-semibold text-lg'>MORE FROM ASOS</h1>
<p className='hover:text-blue-800'>Mobile and ASOS apps</p>
<p className='hover:text-blue-800'>ASOS Marketplace</p>
<p className='hover:text-blue-800'>Gift vouchers</p>
<p className='hover:text-blue-800'>Black Friday</p>
<p className='hover:text-blue-800'>ASOS x Thrift+</p>
<p className='hover:text-blue-800'>Discover the ASOS Credit Card</p>
<p className='hover:text-blue-800'>Help Improve the ASOS Website</p>
        </div>
        
    </div>
    </div>
  )
}

export default Footer
