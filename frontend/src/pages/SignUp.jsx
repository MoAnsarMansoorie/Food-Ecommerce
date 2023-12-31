import React, { useState } from "react";
import loginAnimation from "../assets/login-animation.gif";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const {firstName, email, password, confirmPassword} = data
    if(firstName && email && password && confirmPassword){
        if(password === confirmPassword){
            alert("Successful")
        }
        else{
            alert("password and confirmPassword is not equal!")
        }
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
            <div className="absolute bottom-0 bg-slate-500 h-1/3 w-full text-center">
                <p className="text-sm p-1 text-white">Upload</p>
            </div>
          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName} 
            onChange={handleInputChange}
            className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleInputChange}
            className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />

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

          <label htmlFor="confirmPassword">Password</label>
          <div className="flex px-2 py-1 rounded mt-1 mb-2 bg-slate-200 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleInputChange}
              className="w-full bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="bg-red-500 w-full max-w-[150px] m-auto hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-sm text-left mt-2">
          Already, Have an Account?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
