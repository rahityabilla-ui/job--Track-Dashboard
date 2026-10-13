import './home.css'
import {Link,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
const Home = () =>{
    const[totalApplications,setTotalApplications] = useState(0)
    const[interviews,setInterviews] = useState(0)
    const[offers,setOffers] = useState(0)
    useEffect(()=>{
        const jobs= JSON.parse(localStorage.getItem("jobs")) || [];
        setTotalApplications(jobs.length)
        // jobs.forEach(eachJob => )
        const interviewCount=jobs.filter(job => job.select === "interview").length
        setInterviews(interviewCount)
        const offersCount = jobs.filter(job => job.select === "offer").length
        setOffers(offersCount)
        console.log("total")
    },[])
    
    const navigate = useNavigate()
    const Logoutfun = () =>{
        localStorage.removeItem("userData")
        navigate('/')
    }
    return(
        <div className="home-bg-container">
            <div className="nav-bar">
                <h1>Job Tracker Dashboard</h1>
            </div>
            <div className="card-container">

                <div className="cards">
                   <h3>Total Applications</h3> 
                   <p>{totalApplications}</p>
                </div>
                <div className="cards">
                    <h3>Interviews</h3>
                    <p>{interviews}</p>
                </div>
                <div className="cards">
                    <h3>Offers</h3>
                    <p>{offers}</p>

                </div>
            </div>
            
            <div className="btn-container">
                <Link to="/addjob" className="btn">Add Job Application</Link>
                <Link to="/viewjob" className="btn">View Job Application</Link>
                <button className="btn logout-btn" onClick={Logoutfun}>Logout</button>
            </div>
        </div>
    )

}
export default Home 
