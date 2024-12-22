import React from 'react'
import Button from '.././components/Button'
import portrait from "../pictuers/portrait-noBackround.png"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const containerStyle = "flex flex-row items-center justify-center mb-12 mx-auto"
const partDivStyle = "flex flex-col items-center justify-center text-center"
const headingStyle = "textLight text-3xl font-bold text-center"
const textStyle = "textLight font-semibold text-xl text-center"
const buttonStyle = "h-full flex items-center duration-300 rounded-3xl mt-4 font-bold text-xl text-black hover:bg-[#705094]"
const buttonPadding = "py-6 px-11"
const anchorStyle = "no-underline px-0 py-0 mx-8 text-6xl text-button-color duration-300 hover:text-[#705094]"

let title = 'Student Software Developer'
let company = 'Mölk vocational school'

let occupation = title +' with '+company

let age = "22"

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div className={`${containerStyle}`}> {/* heading container */}
        <div className={`${partDivStyle} p-[10px]`}>

          <h2 className='text-light font-bold text-2xl'>Hello, My Name Is</h2>
          <h1 className='text-[45px] text-heading font-bold'>Viktor Olausson</h1>
          <h3 className='flex items-center justify-center font-bold text-lg'><span className='text-light'>And I'm a<span className='text-text-primary'> {title}
            </span></span></h3>

        </div>

        <div className={`${partDivStyle}`}>
          <img className='rounded-[135px]' src={portrait} alt="" />
        </div>
      </div>

      <div className={`${containerStyle} flex-col`}> {/* short info container */}
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
        <Button className={`${buttonStyle}`} padding={buttonPadding} onClick={() => navigate("/about-me")}>About Me</Button>
      </div>

      <div className={`${containerStyle} flex-col`}> {/* short info container */}
        <div className={`${partDivStyle}`}>
          <h1 className={`${headingStyle}`}>Projects</h1>
          <h3 className={`${textStyle}`}>
          I'm always trying to expand my knowledge and learn more, therefore am I trying to find new and exciting projects to do 
          </h3>
          <h3 className={`${textStyle}`}>
          I'm however a busy person and do not always have alot of time, 
          but I have done some projects both in my free time and during my studies
          </h3>
          <h2 className={`${textStyle} underline`}>
          To read more about me and my experience please press the button below
          </h2>
        </div>
        <Button className={`${buttonStyle}`} padding={buttonPadding} onClick={() => navigate("/projects")}>Projects</Button>
      </div>

      <div className={`${containerStyle} flex-col mb-0`}> {/* short info container */}
        <div className={`${partDivStyle}`}>
          <h1 className={`${headingStyle}`}>Contact Me</h1>
          <h3 className={`${textStyle}`}>
          The easiest way to contact me is by email
          </h3>
          <h3 className={`${textStyle}`}>
          If you want to follow me on any social media can you also find that by clicking the button bellow
          </h3>
          <h2 className={`${textStyle} underline`}>
          To find my contact details please press the button below
          </h2>
        </div>
        <Button className={`${buttonStyle}`} padding={buttonPadding} onClick={() => navigate("/contact")}>Projects</Button>
        <div className='flex flex-row justify-between mt-4 '>

          <a href="" className={`${anchorStyle}`}><FontAwesomeIcon icon={faXTwitter}/></a>
          <a href="" className={`${anchorStyle}`}><FontAwesomeIcon icon={faInstagram}/></a>
          <a href="" className={`${anchorStyle}`}><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="" className={`${anchorStyle}`}><FontAwesomeIcon icon={faGithub}/></a>

          {/* <a href="" className={`${anchorStyle}`}><TwitterX width='' height='' classNames={`${iconStyle} bg-orange-600`}/></a>
          <a href="" className={`${anchorStyle}`}><Instagram width='' height='' classNames={`${iconStyle} bg-orange-600`}/></a>
          <a href="" className={`${anchorStyle}`}><TwitterX width='' height='' classNames={`${iconStyle}`}/></a>
          <a href="" className={`${anchorStyle}`}><TwitterX width='' height='' classNames={`${iconStyle}`}/></a> */}
        </div>
      </div>
    </>
  
  
  )
}

export default Home