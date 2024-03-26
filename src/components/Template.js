import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frameImage from "../assets/frame.png"

function Template({title, desc1, desc2, image, formType, setIsLoggedIn}){
    return(
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="semi-bold text-[1.875rem] text-richblack-5 loading-[2.375rem] ">{title}</h1>

                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100">{desc1}</span>
                    <br />
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {formType === "signup"?<SignupForm setIsLoggedIn={setIsLoggedIn}/>: <LoginForm setIsLoggedIn = {setIsLoggedIn}/>}
                
                <div className="flex items-center my-4 gap-x-2">
                    <div className="w-full bg-richblack-700 h-[1px] " ></div>
                    <p className="font-medium text-richblack-700 leading-[1.375rem]">OR</p>
                    <div className="w-full bg-richblack-700 h-[1px] "></div>
                </div>

                <button className="flex w-full rounded-[8px] font-medium items-center justify-center text-richblack-100
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
                    <i class="fa-brands fa-google"></i>
                    <p>Sign Up With Google</p>
                </button>

            </div>

            <div className="relative w-11/12 max-w-[450px] ">
                <img src={frameImage} alt="Pattern" height={504} width={558} loading="lazy" />
                <img src={image} alt="Students" height={504} width={558} loading="lazy" 
                    className="absolute -top-4 right-4"
                />
            </div>
        </div>
    );
}   

export default Template;