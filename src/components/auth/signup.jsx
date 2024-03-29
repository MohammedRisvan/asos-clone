import React,{useState} from 'react'

function Join() {
    const [show,setShow]=useState("password");
    const [error,setError]=useState({});
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        phone:"",
        dateofbirth:"",
    })
    
    const handlesubmit= ()=>{
        const validationErrors = {}
        if (!formData.username.trim()) {
          validationErrors.username = "username is not required"
        }
        if (!formData.email.trim()) {
          validationErrors.email = "email is requird"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          validationErrors.email = "email is not valid"
        }
        if (!formData.password.trim()) {
          validationErrors.password = "password is requird"
        } else if (formData.password.length < 6) {
          validationErrors.password = "password should be at least 6 Character"
        }
        if (formData.confirmpassword !== formData.password) {
          validationErrors.confirmpassword = "password not match"
        }
    
    
        setError(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
          alert("Form Submitted is successfully")
    
    }

  }

  return (
    <div className='w-full bg-white flex flex-col justify-center gap-10 items-center px-5 py-10 rounded'>
        <div className='flex  gap-5'>
            <button className='border border-b-blue-700 px-5 '>Join</button>
            <div className='w-0.5 h-10 bg-slate-700'/>
            <button className='border border-b-slate-700 px-5'>Sign In</button>
        </div>
            <h1>Signup With</h1>
            <p className='w-5/6'>Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #NotEvil</p>
            <h1>OR SIGN UP WITH EMAIL</h1>
        <form className='flex flex-col gap-3/'>
            <label>
                EMAIL ADDRESS :
            </label>
            <input type='email'onChange={(e)=>{formData.email=e.target.value}} value={formData.email} name='email' className='w-5/6 border border-black'/>
           {error.email && <span>{error.email}</span>}
            <label>
                FIRST NAME :
            </label>
            <input type='text' onChange={(e)=>{formData.firstname=e.target.value}} value={formData.firestname} name='firestname'  className='w-5/6 border border-black'/>
            {error.firstname && <span id='ERROR'>{error.firstname}</span>}
            <label>
                LAST NAME :
            </label>
            <input type='text'onChange={(e)=>{formData.lastname=e.target.value}} value={formData.lastname} name='lastname'  className='w-5/6 border border-black'/>
            {error.lastname&&<span>{error.lastname}</span>}
            <label>
                Password :
            </label>
            <label className=' w-5/6 px-3 flex border border-black'>
            <input type={show} className='w-full h-full  inline' />
            <button type='button' className="" onchange={(e)=>{formData.password=e.target.value}} onClick={()=>{show==="password"?setShow("text"):setShow("password")}}>s</button>
            </label>
            {error.password&&<span className='text-red-700'>{error.password}</span>}
            <label>
                Data of Birth
            </label>
            <input type="date" onChange={(e)=>{console.log(e)}} className='w-5/6 border border-black'/>
            <button type="button" onClick={handlesubmit} className='px-3 py-2 bg-gray-900 text-white font-semibold'>Join</button>
        </form>
    </div>
  )
}

export default Join;
