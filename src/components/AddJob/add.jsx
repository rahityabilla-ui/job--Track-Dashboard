import './add.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddJob = () =>{
    const[company,setCompany] = useState('')
    const[role,setRole] =useState('')
    const[select,setSelect] = useState('Interview')
    const[data,setData] = useState({})
    const [companyInfo,setCompanyInfo] = useState(false)
    const searchCompany = () =>{
        const apiFunCall =async () =>{
            const api_url= `https://api.agify.io/?name=${company}`
            const response = await fetch(api_url)
            console.log(response)
            const response_Data = await response.json()
            console.log(response_Data)
            setData(response_Data)
            setCompanyInfo(true)
            // const formatted_Data = JSON.parse(response_Data)
        }
        apiFunCall()
    // console.log('ji')
    }
    const companyInfoUi = () =>(
        <div>
            <p>Count: {data.count}</p>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
        </div>
    )
       
    const navigate = useNavigate()

    const onSubmitForm = (e) =>{
        e.preventDefault()
        if(company === "" || role === "" || select === ""){
            alert("Missing input boxes")
        }
        else{
            const job_details = {company,role,select}
            const jobs = JSON.parse(localStorage.getItem("jobs")) || []; // first time there no jobs key in local storage so [] will get
            jobs.push(job_details) 

            // localStorage.setItem("job",JSON.stringify(job_details))
            localStorage.setItem("jobs",JSON.stringify(jobs))
            alert("Job added Successfully")
            setCompany('')
            setRole('')
            setSelect('')
            navigate('/viewjob') 

        }
    }
    return(
        <div className="bg-container">
            <div className="job-card">
                <h2>Add Job</h2>
                <form onSubmit={onSubmitForm}>
                    <div className='input-container'>
                    <input className="add-input" type="text" value={company} placeholder="Company Name" onChange={e =>{ setCompany(e.target.value)
                        if(e.target.value===""){
                            setCompanyInfo(false)
                        }
                    }} />

                    
                    <div className='info'>
                        {companyInfo && companyInfoUi()}
                        <button onClick={searchCompany} type="button" className='info-btn'>Get Company Info</button>
                    </div>
                    <input className="add-input" type="text" value={role} placeholder="Job role" onChange={e => setRole(e.target.value)}/>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="rejected">Rejected</option>
                        <option value="rejected">Offer</option>
                    </select>
                    </div>
                    <button className='add-btn'type="submit">Add Job</button>
                </form>

            </div>

        </div>
    )

}
export default AddJob;