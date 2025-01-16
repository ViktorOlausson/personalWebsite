import React from 'react'
import {ChevronLeftIcon} from "@heroicons/react/solid"

function WorkExperience() {
  return (
    <div className='flex flex-row align-middle justify-center  w-full'>
      
      <div className='flex flex-col sm:min-w-72 lg:w-1/4 max-w-xl shadow-lg shadow-zinc-800'> {/* Container div */}
        <div className='bg-nav-prime px-2 py-0.5 h-14 flex flex-row align-middle justify-left'> {/* Heading div */}
          <div className='flex flex-col w-1/2'>
            <h1 className='text-white text-xl'><span className='font-semibold'>Företag AB, </span>plats - title</h1>
            <h2>tids period</h2>
          </div>
          <div className='w-1/2 flex justify-end items-center'>
            <ChevronLeftIcon className={`transition-all duration-300 size-12 px-0`} strokeWidth={2}/>
          </div>
          
        </div>
        <div className={`bg-dropdown w-full py-0.5 px-2 shadow-inner shadow-primary overflow-hidden transition-all duration-300 max-h-48`}> {/* content */}
            description
        </div>
      </div>

    </div>
  )
}

export default WorkExperience