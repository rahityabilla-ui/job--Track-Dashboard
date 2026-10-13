import './App.css'
import Login from './components/Login/login.jsx'
import Register from './components/Register/register.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/home.jsx'
import AddJob from './components/AddJob/add.jsx'
import ViewJob from './components/ViewJob/view.jsx'
import Edit from './components/Edit/edit.jsx'

function App() {
  

  return (
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/addjob" element={<AddJob/>}/>
        <Route path="/viewjob" element={<ViewJob/>}/>
        <Route path="/editjob" element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
  
  
  )
}

export default App
