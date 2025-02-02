import React, { useState } from 'react'
import {ChevronLeftIcon} from "@heroicons/react/solid"

/// company used for school and business 
///



function InfoCard({id, company = "", city = "", title = "", period= "", description= "", containerStyle=""}) {

  const [active, setActive] = useState({})

  // TODO: move title below company and smaller
   const _toggleMenu = (id) => {
    setActive((prevActiveMenus) => ({
      ...prevActiveMenus,
       [id]:!prevActiveMenus[id],
     }))
  }

  let styleActive = "max-h-48 shadow-inner shadow-primary py-0.5"

  let styleUnactive = "max-h-0"


  return (
    <div className={`relative flex flex-col min-w-96 lg:w-1/4 max-w-md shadow-lg shadow-zinc-700  ${containerStyle}`}> {/* Container div */}
        <div className='bg-nav-prime px-1 py-0.5 h-14 flex flex-row align-middle justify-left cursor-pointer border border-black' onClick={() => _toggleMenu(id)}> {/* Heading div */}
          <div className='flex flex-col w-5/6'>
            <h1 className='text-white text-lg'><span className='font-semibold'>{company}, </span>{city}</h1>
            {/*<h2 className='text-neutral-300'>{title} <span className='font-bold'>|</span> {period}</h2>*/}
            <h2 className='text-neutral-300 flex'>{title} <span className='border-l-2 h-full block mx-2'></span> {period}</h2>
          </div>
          <div className='w-1/6 flex justify-end items-center'>
            <ChevronLeftIcon className={`transition-all duration-300 size-12 px-0 ${active[id] ? "-rotate-90" : "rotate-0"}`} strokeWidth={2}/>
          </div>
          
        </div>
        {/* Shadow of when hidden */}
        <div className={`lg:absolute sm:relative lg:top-14 z-20 bg-dropdown w-full px-2 overflow-hidden transition-all duration-300 ${active[id] ? styleActive : styleUnactive}`}> {/* content // dropdown container */}
            <p className='text-white'>
              {description}
            </p>
        </div>
      </div>
  )
}

export default InfoCard