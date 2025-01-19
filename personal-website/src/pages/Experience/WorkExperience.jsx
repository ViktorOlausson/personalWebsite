import React, { useState } from 'react'
import Card from "../../components/InfoCard"
import workData from "../../Data/Work.json"

//const { company, location, title, time, description } = workData.Work; // göra detta till en array av object


function WorkExperience() {

  const [active, setActive] = useState([])

  return (
    <div className='flex flex-row align-middle justify-center w-full'>
      
      {/* <Card id="" company={company} city={location} title={title} period={time} description={description}/> */}

      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 items-center justify-between h-full'>
      {workData.Work.map((work, index) => (
        <Card key={index} company={work.company} city={work.location} title={work.title} period={work.time} description={work.description} containerStyle='mx-6 my-12'/>
      ))}
      </div>

    </div>
  )
}

export default WorkExperience