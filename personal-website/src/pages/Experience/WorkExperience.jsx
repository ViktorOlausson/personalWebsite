import React from 'react'

function WorkExperience() {
  return (
    <div className='flex flex-row align-middle justify-center bg-green-400 w-full'>
      
      <div className='sm:min-w-72 lg:w-1/3 max-w-xl relative z-50 h-full bg-orange-800'> {/* Container div */}
        <div className='bg-nav-prime px-2 py-0.5 h-14 '> {/* Heading div */}
          <h1 className='text-white text-xl'><span className='font-semibold'>Företag AB, </span>plats - title</h1>
          <h2>tids period</h2>
          <div className='bg-dropdown w-full'> {/* content */}
            description
          </div>
        </div>
      </div>

    </div>
  )
}

export default WorkExperience