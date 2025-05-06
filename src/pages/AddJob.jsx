import React, { useState } from 'react'

const AddJob = () => {
    const [title,settitle] = useState("")
    const [location,setlocation] = useState('Bangalore')
    const[category,setcategory] = useState('Programming')
    const[level,setlevel]= useState('Beginner level')
    const [salary,setsalary] = useState(0);
  return (
    <form action="">
             <div>
                <p>Job Title</p>
                <input type="text" placeholder='type here' onChange={e=>settitle(e.target.value)} value = {title} required/>
             </div>

             <div>
                <p>Job Description</p>
                <div>
                    
                </div>
             </div>


    </form>
  )
}

export default AddJob