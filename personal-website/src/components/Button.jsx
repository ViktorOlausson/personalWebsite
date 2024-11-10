import React from 'react'
import "../index.css"

function Button({bgColor="buttonColor", rounded="rounded-lg", textColor="text-white", className="", padding="px-4 py-2", children}) {
  return (
    <button className={`${padding} ${bgColor} ${rounded} ${textColor} ${className}`}>{children}</button>
  )
}

export default Button