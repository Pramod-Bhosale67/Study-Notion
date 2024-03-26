import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}){

    const [formData, setFormData] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const changeHandler = (event) =>{
        setFormData(prevData =>(
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const changePasswordState = () =>{
        setShowPassword(!showPassword);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

    }
    return(
        <div>
            <form action="" onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">
                <label className="w-full">
                    <p className="text-richblack-5 mb-1 loading-[1.375rem] text-[0.875rem]">Email Address <sup className="text-pink-200">*</sup></p>
                    <input type="email" required value={formData.email} 
                    placeholder="Enter Email ID" name="email"
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]" />
                </label>

                <label className="w-full relative">
                    <p className="text-richblack-5 mb-1 loading-[1.375rem] text-[0.875rem]">Password <sup className="text-pink-200">*</sup></p>
                    <input type={showPassword? "text": "password"} required 
                    value={formData.password}  name="password"
                    placeholder="Enter Password"
                    onChange={changeHandler} 
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]"
                    />

                    <span onClick={changePasswordState} className="absolute right-3 top-[38px] cursor-pointer">
                    {
                        !showPassword ? (<i className="fa-solid fa-eye text-[24px] text-[#AFB2BF]"></i>):
                        (<i className="fa-solid fa-eye-slash text-[24px] text-[#AFB2BF]"></i>)
                        
                    }
                    </span>

                    <Link to="/">
                        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                    </Link>

                </label>
                
                <button className="bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
                    Sign In
                </button>
    
            </form>
        </div>
    );
}

export default LoginForm