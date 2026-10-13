import './edit.css'
import {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Edit = () =>{
    const[company,setCompany] = useState('')
    const[role,setRole] =useState('')
    const[select,setSelect] = useState('interview')

    const navigate = useNavigate()
    let index=Number(localStorage.getItem('index'))
    const users=JSON.parse(localStorage.getItem('jobs')) || []
    // const job= users[index] 
    useEffect(()=>{
        const job= users[index]
        if(job){
            setCompany(job.company)
            setRole(job.role)
            setSelect(job.select)
        }
    },[])
    
    const onSubmitForm = (e) =>{
        e.preventDefault()
        users[index] = {company,role,select}
        localStorage.setItem('jobs',JSON.stringify(users))
        navigate('/viewjob')

        
    }
    
    return(
        <div className="bg-container">
            <div className="job-card">
                <h2>Edit Job</h2>
                <form onSubmit={onSubmitForm}>
                    <div className='input-container'>
                    <input className="add-input" type="text" value={company} placeholder="Company Name" onChange={e => setCompany(e.target.value)}/>
                    <input className="add-input" type="text" value={role} placeholder="Job role" onChange={e => setRole(e.target.value)}/>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        <option value="interview">Interview</option>
                        <option value="applied">Applied</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    </div>
                    <button className='add-btn'type="submit">Add Job</button>
                </form>

            </div>

        </div>
    )

}
export default Edit