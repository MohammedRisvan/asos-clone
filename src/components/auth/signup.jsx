import React, { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Join() {
  const [show, setShow] = useState(true);
  const [error, setError] = useState({});
  const [select,setSelect]=useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
    dateofbirth: "",
  });
  const navigate = useNavigate();
  const handelchange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const passerver = async () => {
    try {
      console.log("hellow", formData);
      const data = await Axios.post(
        "http://localhost:3005/asos/signup",
        formData,
        { withCredentials: true }
      );
      console.log(data.data);
      if (data.data.success === "otp successsfully transefted") {
        toast.success(data.data.success);
        localStorage.setItem("asosuser", data.data.asosuser);
        navigate("/registerotp");
      } else {
        toast.error(data.data.error);
      }
    } catch (error) {
      console.log("error :", error);
      toast.error(error);
    }
  };

  const handlesubmit = () => {
    console.log(formData);
    const validationErrors = {};
    if (!formData.firstname.trim()) {
      validationErrors.firstname = "firstname is not required";
    }
    if (!formData.lastname.trim()) {
      validationErrors.lastname = "lastname is not required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is requird";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is requird";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 Character";
    }
    if (formData.confirmpassword !== formData.password) {
      validationErrors.confirmpassword = "password not match";
    }
    console.log(validationErrors);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      passerver();
      toast.success("Form Submitted is successfully");
    } else {
      toast.error("please require a data");
    }
  };



  return (
    <div className="w-full bg-white flex flex-col justify-center gap-10 items-center px-5 py-10 rounded">
      <div className="flex  gap-5 w-full">
        <button
          className="border-b-[3px]  border-b-blue-700  font-semibold  w-1/2 "
          onClick={() => {}}
        >
          JOIN
        </button>
        <div className="w-0.5 h-10 bg-slate-300" />
        <button
          className="border-b-[3px] border-b-slate-300 py-3 font-semibold w-1/2"
          onClick={() => {
            window.location = "/signin";
          }}
        >
          SIGN IN
        </button>
      </div>
      <h1 className="font-semibold text-3xl">SIGNUP WITH EMAIL</h1>
      {/* <p className='w-5/6 '>Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #NotEvil</p>
            <h1>OR SIGN UP WITH EMAIL</h1> */}
      <form className="flex flex-col gap-10 w-3/5">
        <div className="flex flex-col gap-3 ">
          <label className="font-bold text-slate-500">EMAIL ADDRESS :</label>
          <input
            type="email"
            onChange={handelchange} //value={formData.email}
            name="email"
            className="px-3 py-2 border border-black w-full"
          />
          {error.email && <span className="text-red-700">{error.email}</span>}
          <label className="font-bold text-slate-500">FIRST NAME :</label>
          <input
            type="text"
            onChange={handelchange} // value={formData.firestname}
            name="firstname"
            className="px-3 py-2 border border-black w-full"
          />
          {error.firstname && (
            <span className="text-red-700">{error.firstname}</span>
          )}
          <label className="font-bold text-slate-500">LAST NAME :</label>
          <input
            type="text"
            onChange={handelchange}
            //value={formData.lastname}
            name="lastname"
            className="px-3 py-2 border border-black w-full"
          />
          {error.lastname && (
            <span className="text-red-700">{error.lastname}</span>
          )}
          <label className="font-bold text-slate-500">Password :</label>
          <label className="flex px-3 gap-3 border border-black w-full">
            <input
              type={!show? 'text' : 'password'}
              name="password"
              className="w-full h-full py-2 border-none outline-none"
              onChange={handelchange}
            />
            <button type="button" onClick={()=>{setShow(!show)}}>
              {show?"SHOW":"HIDE"}
            </button>
          </label>
          {error.password && (
            <span className="text-red-700">{error.password}</span>
          )}
          <label className="font-bold text-slate-500">Confirm Password:</label>
          <label className="flex px-3 gap-3 border border-black w-full">
            <input
              type={!show? "text" : "password"}
              name="confirmpassword"
              className="w-full h-full py-2 border-none outline-none"
              onChange={handelchange}
            />
            <button type="button" className="" onClick={()=>{setShow(!show)}}>
              {!show? "Hide": "Show"}
            </button>
          </label>
          {error.password && (
            <span className="text-red-700">{error.confirmpassword}</span>
          )}
          <label className="font-bold text-slate-500">Data of Birth:</label>
          <input
            type="date"
            name="dateofbirth"
            onChange={handelchange}
            className="px-3 py-2 border border-black w-full"
          />
        </div>

          <label className="font-bold text-slate-500 flex flex-col gap-2">
            MOSTLY INTRESTED IN:
          <div className="flex gap-10"> 
          <div className="flex gap-3 "> 
            <input
              type="radio"
              name="gender"
              value="Female"
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id="femaleRadio"
              defaultChecked
            />
            <label
              htmlFor="femaleRadio"
              className={`font-${true ? "medium" : "thin"}`}
            >
              Womenswear
            </label></div>
              <div className="flex gap-3"> 
            <input
              type="radio"
              name="gender"
              value="Male"
              className="active:bg-black"
              id="maleRadio"
              />
            <label
              htmlFor="maleRadio"
              className={`font-${false ? "medium" : "thin"}`}
            >
              Menswear
            </label>
            </div>
          </div>
       </label>
       <div className="flex flex-col gap-5">

       <div className="flex justify-between">
       <label className="flex flex-col gap-2">
        <h1 className="font-bold text-lg">CONTACT PREFERENCES</h1>
        <p>Tell us which emails you’d like:</p>
       </label>
       <button type="button" className="font-bold bg-purple-100 px-3" onClick={()=>{setSelect(!select)}}>{select?"CLEAR":"SELECT ALL"}</button>
       </div>
       <label className="flex justify-between w-full font-medium"onClick={()=>{setSelect(!select)}}>
        Discounts and new drops
        <input type="checkbox"checked={select}/>
       </label>
       </div>
        <button
          type="button"
          onClick={handlesubmit}
          className="px-3 py-2 bg-gray-900 text-xl text-white font-bold "
        >
          JOIN ASOS
        </button>
      </form>
    </div>
  );
}

export default Join;
