import React from 'react'
import {ChevronLeftIcon} from "@heroicons/react/solid"

/// company used for school and business 
//

function InfoCard(id, company = "", city = "", title = "", period= "", description= "") {
  return (
    <div className='flex flex-col min-w-96 lg:w-1/4 max-w-xl shadow-lg shadow-zinc-700'> {/* Container div */}
        <div className='bg-nav-prime px-2 py-0.5 h-14 flex flex-row align-middle justify-left'> {/* Heading div */}
          <div className='flex flex-col w-3/4 bg-orange-500'>
            <h1 className='text-white text-xl'><span className='font-semibold'>{company}, </span>{city} - {title}</h1>
            <h2>{period}</h2>
          </div>
          <div className='w-1/4 flex justify-end items-center bg-red-700'>
            <ChevronLeftIcon className={`transition-all duration-300 size-12 px-0`} strokeWidth={2}/>
          </div>
          
        </div>
        <div className={`bg-dropdown w-full py-0.5 px-2 shadow-inner shadow-primary overflow-hidden transition-all duration-300 max-h-48`}> {/* content // dropdown container */}
            {description}
        </div>
      </div>
  )
}

export default InfoCard