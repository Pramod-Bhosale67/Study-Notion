import Template from "./Template";
import signupImg from "../assets/signup.png"

function SignUp({setIsLoggedIn}){
    return(
        <>
            <Template title="Join the millioins learning to code with StudyNotion for free"
                desc1="Build skills for today, tomarrow & beyond"
                desc2="Education to future-proof your career"
                image={signupImg}
                formType="signup"
                setIsLoggedIn={setIsLoggedIn}
            />
        </>
    );
}

export default SignUp