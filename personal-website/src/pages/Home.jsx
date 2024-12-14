import React from 'react'
import Button from '.././components/Button'
import portrait from "../pictuers/portrait-noBackround.png"

let containerStyle = "flex flex-row items-center justify-center mb-12 bg-blue-500"
let partDivStyle = "flex flex-col items-center justify-center"
let headingStyle = "textLight text-3xl font-bold"
let textStyle = "textLight font-semibold text-xl"

let title = 'Student Software Developer'
let company = 'Mölk vocational school'

let occupation = title +' with '+company

let age = "22"

function Home() {
  return (
    <>
      <div className={`${containerStyle}`}> {/* heading container */}
        <div className={`${partDivStyle} p-[10px]`}>

          <h2 className='textLight font-bold text-2xl'>Hello, My Name Is</h2>
          <h1 className='text-[45px] textHeading font-bold'>Viktor Olausson</h1>
          <h3 className='flex items-center justify-center font-bold text-lg'><span className='textLight'>And I'm a<span className='textPrime'> {title}</span></span></h3>

        </div>

        <div className={`${partDivStyle}`}>
          <img className='rounded-[135px]' src={portrait} alt="" />
        </div>
      </div>

      <div className={`${containerStyle}`}> {/* short info container */}
        <div className={`${partDivStyle}`}>
          <h1 className={`${headingStyle}`}>Short about me</h1>
          <h3 className='textLight font-semibold text-xl'>
          I'm a {age} year old {title} from Stockholm, Sweden
          </h3>
          <h3 className={`${textStyle}`}>
          Right know I'm a {occupation} where I'm studying different Software Development tools and techniques
          </h3>
          <h3 className={`${textStyle}`}>
          I also have completed courses in AI and Cyber Security from Linköpings University and have a strong 
          knowledge about computers and its hardware
          </h3>
          <h3 className={`${textStyle}`}>
          Apart from having a strong knowledge about computers and programming 
          so do I have very strong leadership and problem solving skills
          </h3>
          <h2 className={`${textStyle} underline`}>
          To read more about me and my experience please press the button below
          </h2>
        </div>
      </div>
    </>
  
  
  )
}

export default Home