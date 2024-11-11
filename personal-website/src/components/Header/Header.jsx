import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Container from '../Container/Container'
import "../../index.css"
import Button from '../Button'
import { BeakerIcon, HomeIcon, BriefcaseIcon, InformationCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const iconSize = "size-6"
const buttonStyle = "h-full flex items-center duration-200 hover:bg-button-color px-3"
const buttonPadding = "px-3"
const paragraphStyle = "mx-1.5 font-semibold"
const liStyle = "mx-2"
const buttonColor = ""
const heighActive = "max-h-2"

const navItems = [
  {name: "Home", slug: "/", icon: <HomeIcon className={iconSize}/>},
  {name: "Projects", slug: "/projects", icon: <BeakerIcon className={iconSize}/>},
  {name: "Experience", slug: "/experience", icon: <BriefcaseIcon className={iconSize}/>, dropdownItems:[{}]},
  {name: "About Me", slug: "/about-me", icon: <InformationCircleIcon className={iconSize}/>},
  {name: "Contact", slug: "/contact", icon: <EnvelopeIcon className={iconSize}/>},
]

function Header() {
  const navigate = useNavigate()
  const [hidden, setHidden] = useState()
  return (
    <header className='h-12 shadow-md shadow-box-shadow-gray navBackground place-content-center flex'>
      {/* border frame: border-2 border-border-gray */}
      <Container className='place-content-center h-full ' maxWidth='max-w-9xl' paddingX=''>
        <nav className='flex h-full align-middle'>
          <div className='w-1/6 place-content-center'> {/* Logo div */}
            {/* <Link to="/">
              <Logo />
            </Link> */}
          </div>
          {/* Ändra färger på knappar?? */}
              <ul className='flex ml-auto'>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding} bgColor={buttonColor}>
                      <HomeIcon className="size-5"/>
                      <p className={paragraphStyle}>Home</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding} bgColor={buttonColor}>
                      {navItems[1].icon}
                      <p className={paragraphStyle}>Projects</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} bgColor={buttonColor} padding={buttonPadding} onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
                      <BriefcaseIcon className="size-5"/>
                      <p className='mx-1.5 font-semibold'>Experience</p>
                  </Button>
                  {hidden ? null :
                  <div className='absolute bg-dropdown-bg'>
                    This is test dropdown!!
                  </div>
                  }
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding} bgColor={buttonColor}>
                      <InformationCircleIcon className="size-5"/>
                      <p className={paragraphStyle}>About Me</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding} bgColor={buttonColor}>
                      <EnvelopeIcon className="size-5"/>
                      <p className={paragraphStyle}>Contact</p>
                  </Button>
                </li> 

                {/* {navItems.map((item) => (
                  <li className={liStyle} key={item.name} padding={buttonPadding}>
                    <Button className={buttonStyle} bgColor={buttonColor} padding={buttonPadding} onClick={() => navigate(item.slug)}>
                      {item.icon}
                      <p className={paragraphStyle}>
                        {item.name}
                      </p>
                    </Button>
                  </li>
                ))}*/}
                
                
              </ul>
          
        </nav>
      </Container>
    </header>
  )
}

export default Header