import React, { useState } from 'react'
import Card from "../../components"
import workData from "../../Data/Work.json"

const { company, location, title, time, description } = workData.Work; // göra detta till en array av object

function WorkExperience() {

  const [active, setActive] = useState([])

  return (
    <div className='flex flex-row align-middle justify-center  w-full'>
      
      <Card/>

    </div>
  )
}

export default WorkExperience