import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Login = () =>
{
    const [uname,setUname]=useState("");
    const [pass,setPass]= useState("");
    const navigate = useNavigate();
    const [message,setMessage] = useState("");
    function handleLogin(e){
        e.preventDefault();
        if(uname==="admin" && pass==="manager"){
           navigate("/admin")
        }else if(uname==="user" && pass==="abes"){
           navigate("/user")
        }
        else{
            setMessage("Error: wrong credentials")
           navigate("/")
        }
    }
    return(
        
        <div>
            <Header/>
            <div className="login">
                <div className="loginForm">
                    <h1>SignIn Here</h1>
                <h2>{message}</h2>
                <form onSubmit={handleLogin}>
                    UserName:
                    <input type="text"
                      value={uname}
                      placeholder="Enter the User Name"
                    onChange={(e)=>setUname(e.target.value)} />
                    <br/>
                    Password :
                    <input type="password"
                    value={pass}
                    placeholder="Enter the Password"
                    onChange={(e)=>setPass(e.target.value)} />
                    <br/>
                    <button>SignIN</button>
                    <button>Reset</button>
                </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login