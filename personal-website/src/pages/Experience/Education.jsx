import React from 'react'
import Card from "../../components/InfoCard"
import EducationData from "../../Data/Education.json"

function Education() {
  return (
    <div className='flex flex-row align-middle justify-center w-full'>

    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between h-full'>
    {EducationData.Work.map((Education, index) => (
      <Card key={index} id={index} company={Education.company} city={Education.location} title={Education.title} period={Education.time} 
        description={Education.description} containerStyle='mx-6 my-12 lg:mb-40'/>
      
    ))}
    
    </div>

  </div>
  )
}

export default Education