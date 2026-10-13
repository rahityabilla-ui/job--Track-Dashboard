import './view.css'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
const ViewJob =() =>{
    const[jobs,setOldJobs] = useState(JSON.parse(localStorage.getItem("jobs")))
    const[searchInput,setSearchInput] = useState('')
    const[status,setSelectStatus] = useState('all')
    const onChangeSearchInput=(e)=>{
        setSearchInput(e.target.value)
        // console.log(e.target.value)

    }
    // console.log(searchInput)
    const searchResults = jobs.filter(eachjob => 
        eachjob.company.toLowerCase().includes(searchInput.toLowerCase()) || 
        eachjob.role.toLowerCase().includes(searchInput.toLowerCase())
    )
    
    const selectStatus = (e) =>{
        setSelectStatus(e.target.value)
        
    }
    const finalResults = searchResults.filter(job =>
        status === "all" || job.select === status
    )
    // const filterStatus = jobs.filter(job => )
    // const jobs=JSON.parse(localStorage.getItem("jobs"))
    // const deleteJob = (e) =>{
    //     const index = e.target.value // get the index value
    //     jobs.splice(index,1) // startindex,delete count
    //     localStorage.setItem("jobs",JSON.stringify(jobs))
    //     window.location.reload();
    // }
    // when useState is used the variable oldjobs used in map
    
    const deleteJob = (e) =>{
        const index = e.target.value
        const updateJobs = jobs.filter((j,i) => i != index)
        setOldJobs(updateJobs)

        localStorage.setItem("jobs",JSON.stringify(updateJobs))
        
    }
    const navigate=useNavigate()
    const addJob = () =>{
        
        navigate('/addjob')

    }
    const handleEditBtn=(e) =>{
        let index = e.target.value
        localStorage.setItem('index',index)
        console.log(index)
        navigate('/editjob')
    }
    return(
        <div className="view-container">
            <div className='job-container'>
                <h2 className='view-heading'>
                    Job Applications
                </h2>
                <button className='add-btn' onClick={addJob}>Add Job</button>
                <div className='search-select'>
                    <input type="search" placeholder='Search company or role' onChange={onChangeSearchInput} value={searchInput} className='search-bar'/>
                    <select className='select-option' onChange={selectStatus} value={status}>
                        <option value="all">All</option>
                        <option value="interview">Interview</option>
                        <option value="applied">Applied</option>
                        <option value="rejected">Rejected</option>
                        <option value="offer">Offer</option>
                    </select>
                </div>
                
                <table>
                    <thead className='tb-heading'>
                        <tr>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalResults.map((job,index) =>(
                            <tr key={index}>
                            <td>{job.company}</td>
                            <td>{job.role}</td>
                            <td>{job.select}</td>
                            <td className='edit-delete'>
                                <button className="edit-btn" onClick={handleEditBtn}>Edit</button>
                                <button className="delete-btn" value={index} onClick={deleteJob}>Delete</button>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>

            </div>
            
        </div>
    )

}
export default ViewJob;