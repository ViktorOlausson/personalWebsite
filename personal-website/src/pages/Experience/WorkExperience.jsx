import React, { useState } from 'react'
import Card from "../../components/InfoCard"
import workData from "../../Data/Work.json"

const { company, location, title, time, description } = workData.Work; // göra detta till en array av object
const id = 1

//id={id} company={company} city={location} title={title} period={time} description={description}

function WorkExperience() {

  const [active, setActive] = useState([])

  return (
    <div className='flex flex-row align-middle justify-center  w-full'>
      
      <Card id={id} company={company} city={location} title={title} period={time} description={description}/>

    </div>
  )
}

export default WorkExperience