import React, { useState } from "react";
import loginAnimation from "../assets/login-animation.gif";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

function Login() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setData((prev) => {
        return{
            ...prev,
            [name]:value
        }
    })
  }
  console.log(data);

  const handleUploadImageProfile = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data);

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {email, password} = data
    if(email && password){
        alert("successful")
        navigate("/login")
    }
    else{
        alert("These fields are mandatory!")
    }
  }

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>SignUp Page</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={loginAnimation} alt="signUpIMG" className="w-full" />

          <label htmlFor="profileImage">
          <div className="absolute bottom-0 h-1/3 w-full bg-slate-500 text-center cursor-pointer">
            <p className="text-sm p-1 text-white">Upload</p>
          </div>
          <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleUploadImageProfile}/>
          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 rounded mt-1 mb-2 bg-slate-200 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={data.password}
              onChange={handleInputChange}
              className="w-full bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="bg-red-500 w-full max-w-[150px] m-auto hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Log In
          </button>
        </form>
        <p className="text-sm text-left mt-2">
          Don't Have an Account?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
