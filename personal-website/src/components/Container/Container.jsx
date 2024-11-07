//here is the container where all elements should be loaded in each page
import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl px-4'>{children}</div>
  )
}

export default Container