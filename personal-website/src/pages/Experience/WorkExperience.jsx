import React, { useState } from 'react'
import Card from "../../components/InfoCard"
import workData from "../../Data/Work.json"

//const { company, location, title, time, description } = workData.Work; // göra detta till en array av object


function WorkExperience() {



  return (
    <div className='flex flex-row align-middle justify-center w-full'>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 items-center justify-between h-full '>
      {workData.Work.map((work, index) => (
        <Card key={index} id={index} company={work.company} city={work.location} title={work.title} period={work.time} description={work.description} containerStyle='mx-6 my-12 lg:mb-40'/>
        
      ))}
      
      </div>

    </div>
  )
}

export default WorkExperience