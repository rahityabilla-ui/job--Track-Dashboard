import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './register.css'

const Register = () =>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [conPwd, setConPwd] = useState("");

    const navigate = useNavigate()
    const onSubmitRegister=(e) =>{
        e.preventDefault()
        const userDetails={fullName,email,pwd}
        
        if(pwd !== conPwd){
            alert("your password does not match")
            
        }
        if(fullName !== "" && email !== "" && pwd !== ""){
            // convert this js object into JSON string
            localStorage.setItem("userData",JSON.stringify(userDetails))
            alert("User Registered Successfully")
            navigate('/Login')
        }
        else{
            alert("Missing inputs")
        }
    }

    // const full_name="Muthana Keerthana"
    // const email="keerthana@gmail.com"
    // const password ="keerthi@123"
    // const con_pwd = "keerthi@123"
    return(
        <div className='register-bg-container'>
            <div className='register-card'>
                <h2 className='heading'>Register</h2>
                <form onSubmit={onSubmitRegister}>
                    <input className="reg-input" type="text" value={fullName} placeholder="Full Name" onChange={e => setFullName(e.target.value)}/><br/>
                    <input className="reg-input" type="email" value={email} placeholder="Enter email" onChange={e => setEmail(e.target.value)}/><br/>
                    <input className="reg-input" type="password" value={pwd} placeholder="Password" onChange={e => setPwd(e.target.value)}/><br/>
                    <input className="reg-input" type="password" value={conPwd} placeholder="Confirm Password" onChange={e => setConPwd(e.target.value)}/><br/>
                    <button type="submit" className='register-btn'>Register</button>
                </form>
                <p>Already have an Account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )

} 
export default Register