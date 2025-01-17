import Template from "./Template";
import loginImg from "../assets/login.png"

function Login({setIsLoggedIn}){
    return(
        <div>   
            <Template title="Welcome Back"
                desc1="Build skills for today, tomarrow & beyond"
                desc2="Education to future-proof your career"
                image={loginImg}
                formType="login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    );
}

export default Login