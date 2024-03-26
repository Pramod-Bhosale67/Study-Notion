import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){
    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", password:"",confirmPassword:""});
    const [showPassword, setShowPassword] = useState(false);   
    const nagivate = useNavigate();          
    const [accountType, setAccountType] = useState("student");                   

    const changeHandler = (event) =>{
        setFormData(prevData =>(
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const changePasswordState = () => {
        setShowPassword(!showPassword)
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        if (formData.password !== formData.confirmPassword){
            toast.error("Password Don't Match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        nagivate("/dashboard");
    }

    const accountHandlerForStudent = () =>{
        setAccountType("student");
    }

    const accountHandlerForInstructor = () => {
        setAccountType("instructor");
    }
    
    return(
        <div>
            {/* student or instructor tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full my-6 max-w-max">
                <button className={`${accountType === "student"? "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-800"} py-2 px-5 rounded-full transition-all duration-200`} onClick={accountHandlerForStudent}>Student</button>
               
                <button className={`${accountType === "instructor"? "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-800"} py-2 px-5 rounded-full transition-all duration-200`}   onClick={accountHandlerForInstructor}>Instructor</button>
            </div>

            <form action="" onSubmit={submitHandler}>

            {/* first and last name */}
                <div className="w-full flex justify-between mt-4">
                    <label htmlFor="">
                        <p className="text-richblack-5 mb-1 loading-[1.375rem] text-[0.875rem]">First Name <sup className="text-pink-200">*</sup></p>
                        <input type="text" required name="firstName" 
                            value={formData.firstName}
                            onChange={changeHandler} placeholder="Enter Name"
                            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>

                    <label htmlFor="">
                        <p className="text-richblack-5 mb-1 loading-[1.375rem] text-[0.875rem]">Last Name <sup className="text-pink-200">*</sup></p>
                        <input type="text" required name="lastName" 
                            value={formData.lastName}
                            onChange={changeHandler} placeholder="Enter Last Name"
                            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>
                </div>

            {/* email */}
                <label htmlFor="">
                        <p className="text-richblack-5 mb-1 loading-[1.375rem] text-[0.875rem]">Email <sup className="text-pink-200">*</sup></p>
                        <input type="text" required name="email" 
                            value={formData.email}
                            onChange={changeHandler} placeholder="Enter Email"
                            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]"
                        />
                </label>
            
            {/* password */}
            <div className="w-full flex justify-between mt-4">
                 <label className="relative">
                    <p className="text-richblack-5 mb-1 loading-[1.375rem] text-[0.875rem]">Password <sup className="text-pink-200">*</sup></p>
                    <input type={showPassword? "text": "password"} required 
                    value={formData.password}  name="password"
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]" />


                    <span onClick={changePasswordState} className="absolute right-3 top-[38px] cursor-pointer">
                    {
                        !showPassword ? (<i className="fa-solid fa-eye text-[24px] text-[#AFB2BF]"></i>):
                        (<i className="fa-solid fa-eye-slash text-[24px] text-[#AFB2BF]"></i>)
                        
                    }
                    </span>

                </label>

                <label className="relative">
                    <p className="text-richblack-5 mb-1 loading-[1.375rem] text-[0.875rem]">Confirm Password <sup className="text-pink-200">*</sup></p>
                    <input type={showPassword? "text": "password"} required 
                    value={formData.confirmPassword}  name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]" />

                    <span onClick={changePasswordState} className="absolute right-3 top-[38px] cursor-pointer">
                    {
                        !showPassword ? (<i className="fa-solid fa-eye text-[24px] text-[#AFB2BF]"></i>):
                        (<i className="fa-solid fa-eye-slash text-[24px] text-[#AFB2BF]"></i>)
                        
                    }
                    </span>

                </label>
            </div>

            <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
                Create Account
            </button>

            </form>

        </div>
    );
}

export default SignupForm