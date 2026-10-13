import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './login.css'

const Login = () =>{
    const[userName,setUserName] =useState('')
    const[pwd,setPwd] = useState('')

    const navigate = useNavigate()
    const onSubmitForm =(event) =>{
        event.preventDefault()
        const storedUserDetails = JSON.parse(localStorage.getItem("userData"))

        if(userName === storedUserDetails.email && pwd === storedUserDetails.pwd){
            alert("Login Successful")
            navigate('/home')
        }
        else{
            alert("you entered invalid username or password")
        }
    }


    return(
        <div className="login-bg-container">
            <div className="login-card">
                <h2 className='heading'>Login Form</h2>
                <form onSubmit={onSubmitForm}>
                    <div className='inputs'>
                    <input className="login-input" type="text" value={userName} placeholder="email" onChange={(e) => setUserName(e.target.value)}/>

                     <input className="login-input" type="password" value={pwd} placeholder="password" onChange={(e) => setPwd(e.target.value)}/>
                
                    <button type="submit" className='login-btn'>Login</button>
                    </div>
                </form>
                <p>Don't have an Account? <Link to="/register">Register</Link></p>
                
            </div>
        </div>
    )

}
export default Login