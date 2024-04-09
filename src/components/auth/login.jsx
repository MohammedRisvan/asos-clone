import React, { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [show, setShow] = useState("password");
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [forget, setForget] = useState(true);
  const navigate = useNavigate();
  const passerver = async () => {
    const loginuser = await Axios.post(
      "http://localhost:3005/asos/signin",
      { formData, forget },
      { withCredentials: true }
    );
    console.log(loginuser);
    const { success, error } = loginuser.data;
    if (success === "Login success fully") {
      toast.success(success);
      navigate("/");
    } else {
      toast.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("this is form", formData);

    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "please Enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }
    if (forget && !formData.password.trim()) {
      validationErrors.password = "Please enter your password";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      toast.success("Logged in Successfully");
      passerver();
    } else {
      toast.error("please enter vallid data");
    }
  };
  const Forget = () => {
    setForget(!forget);
  };
  return (
    <div className="w-full bg-white flex flex-col justify-center gap-10 items-center px-5 py-10 rounded">
      <div className="flex  gap-5 w-full">
        <button
          className="border-b-[3px] border-b-slate-300  font-semibold  w-1/2 "
          onClick={() =>{
            window.location='/signup'
          }}
        >
          JOIN
        </button>
        <div className="w-0.5 h-10 bg-slate-300" />
        <button className="border-b-[3px] border-b-blue-700 py-3 font-semibold w-1/2">
          SIGN IN
        </button>
      </div>
      <form className="flex flex-col gap-10 w-3/5">
        <div className="flex flex-col gap-3 w-full">
          <label className="font-bold text-slate-500">EMAIL ADDRESS :</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="px-3 py-2 border border-black w-full"
          />
          {error.email && <span className="text-red-700">{error.email}</span>}
          {forget && (
            <div className="flex flex-col gap-3">
              <label className="font-bold text-slate-500">PASSWORD :</label>
              <label className="px-2 flex justify-between border border-black ">
                <input
                  type={show}
                  name="password"
                  onChange={handleChange}
                  className="w-11/12 border-none outline-none  py-2  h-full  "
                />
                <button
                  type="button"
                  onClick={() => {
                    show === "password" ? setShow("text") : setShow("password");
                  }}
                >
                  s
                </button>
              </label>
              {error.password && (
                <span className="text-red-700">{error.password}</span>
              )}
            </div>
          )}
        </div>
        {forget ? (
          <div className="flex flex-col gap-5 items-center">
            <button
              onClick={handleSubmit}
              className="bg-gray-800 text-white font-semibold px-24 py-2 text-lg w-full h-full hover:bg-gray-600"
            >
              SIGN IN
            </button>
            <a onClick={Forget}>Forget Password?</a>
          </div>
        ) : (
          <div className="flex  justify-between w-full">
            <button
              type="button"
              onClick={Forget}
              className="bg-gray-950 text-white  h-full"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-gray-950 text-white  h-full"
            >
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
