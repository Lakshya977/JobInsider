import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/applications'
const App = () => {
  return (
    <div>
        <Routes>
        <Route path="/applications" element={<Applications />} />
            <Route path='/' element={<Home/>} />
            <Route path='/apply-job/:id' element={<ApplyJob/>}/>
            <Route path= '/Applications/:id' element={<Applications/>}/>
        </Routes>
    </div>
  )
}

export default App