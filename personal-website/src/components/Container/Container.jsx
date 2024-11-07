//here is the container where all elements should be loaded in each page
import React from 'react'

function Container({children, className = '', maxWidth = "max-w-7xl", paddingX = "px-4", paddingY = ""}) {
  return (
    <div className={`w-full ${className} ${maxWidth} ${paddingX}`}>{children}</div>
  )
}

export default Container