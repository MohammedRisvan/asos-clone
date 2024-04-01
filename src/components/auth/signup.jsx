import React,{useState} from 'react';
import Axios  from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Join() {
    const [show,setShow]=useState("password");
    const [error,setError]=useState({});
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        phone:"",
        dateofbirth:"",
    });
    const navigate=useNavigate();
    const handelchange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData, [name]: value
      })
    }
    
    const passerver=async ()=>{
      try{
        console.log("hellow",formData)
        const data=  await Axios.post("http://localhost:3005/asos/signup",formData,{withCredentials:true})
       console.log(data.data)
       if(data.data.success==="otp successsfully transefted"){
        toast.success(data.data.success);
        localStorage.setItem("asosuser",data.data.asosuser);
        navigate("/registerotp")
       }else{
        toast.error(data.data.error);
       }
       
      }catch(error){
     console.log("error :",error);
     toast.error(error);
      }
    }

    const handlesubmit= ()=>{
       console.log(formData);
        const validationErrors = {}
        if (!formData.firstname.trim()) {
          validationErrors.firstname = "firstname is not required"
        }
        if (!formData.lastname.trim()) {
          validationErrors.lastname = "lastname is not required"
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
    console.log(validationErrors)
        setError(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
          passerver();
          toast.success("Form Submitted is successfully");
      }
     else{
       toast.error("please require a data");
     }

  }

  const inputype=()=>{
    if(show==="password"){
      setShow("text")
    }else{
      setShow("password");
    }
  }

  return (
    <div className='w-full bg-white flex flex-col justify-center gap-10 items-center px-5 py-10 rounded'>
        <div className='flex  gap-5'>
            <button className='border border-b-blue-700 px-5 '>Join</button>
            <div className='w-0.5 h-10 bg-slate-700'/>
            <button className='border border-b-slate-700 px-5'>Sign In</button>
        </div>
            <h1 className='font-bold text-2xl'>Signup With ...</h1>
            <p className='w-5/6 '>Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #NotEvil</p>
            <h1>OR SIGN UP WITH EMAIL</h1>
        <form className='flex flex-col gap-3'>
            <label>
                EMAIL ADDRESS :
            </label>
            <input type='email'onChange={handelchange} //value={formData.email}
             name='email' className='w-5/6 border border-black'/>
           {error.email && <span className='text-red-700'>{error.email}</span>}
            <label>
                FIRST NAME :
            </label>
            <input type='text' onChange={handelchange}// value={formData.firestname}
             name='firstname'  className='w-5/6 border border-black'/>
            {error.firstname && <span className='text-red-700'>{error.firstname}</span>}
            <label>
                LAST NAME :
            </label>
            <input type='text'onChange={handelchange} 
            //value={formData.lastname}
             name='lastname'  className='w-5/6 border border-black'/>
            {error.lastname&&<span className='text-red-700'>{error.lastname}</span>}
            <label>
                Password :
            </label>
            <label className=' w-5/6 px-3 flex border border-black'>
            <input type={show} name='password' className='w-full h-full  inline' onChange={handelchange} />
            <button type='button' onClick={inputype}  >s</button>
            </label>
            {error.password&&<span className='text-red-700'>{error.password}</span>}
              <label>Confirm Password:</label>
            <label className=' w-5/6 px-3 flex border border-black'>
            <input type={show} name='confirmpassword' className='w-full h-full  inline' onChange={handelchange} />
            <button type='button' className=""onClick={inputype} >s</button>
            </label>
            {error.password&&<span className='text-red-700'>{error.confirmpassword}</span>}
            <label>
                Data of Birth:
            </label>
            <input type="date" name='dateofbirth' onChange={handelchange} className='w-5/6 border border-black'/>
        </form>
            <button type="button" onClick={handlesubmit} className='px-3 py-2 bg-gray-900 text-white font-semibold '>
              Join</button>                                                                                                                                                                     
    </div>
  )
}

export default Join;
