import React from 'react'
import Container from '../Container/Container'
import "../../index.css"
import Button from '../Button'
import { BeakerIcon, HomeIcon, BriefcaseIcon, InformationCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const iconSize = "size-6"
const buttonStyle = "h-full flex items-center duration-200 hover:bg-button-color"
const buttonPadding = "px-3"
const paragraphStyle = "mx-1.5 font-semibold"

const navItems = [
  {name: "Home", slug: "/", icon: <HomeIcon className={iconSize}/>},
  {name: "Projects", slug: "/projects", icon: <BeakerIcon className={iconSize}/>},
  {name: "Experience", slug: "/experience", icon: <BriefcaseIcon className={iconSize}/>},
  {name: "About Me", slug: "/about-me", icon: <InformationCircleIcon className={iconSize}/>},
  {name: "Contact", slug: "/contact", icon: <EnvelopeIcon className={iconSize}/>},
]

function Header() {
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
                  <Button className={buttonStyle} padding={buttonPadding}>
                      <HomeIcon className="size-5"/>
                      <p className={paragraphStyle}>Home</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding}>
                    {/* annan icon?? */}
                      {navItems[1].icon}
                      <p className={paragraphStyle}>Projects</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding}>
                    {/* annan icon?? */}
                      <BriefcaseIcon className="size-5"/>
                      <p className='mx-1.5 font-semibold'>Experience</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding}>
                      <InformationCircleIcon className="size-5"/>
                      <p className={paragraphStyle}>About Me</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding}>
                    {/* annan icon?? */}
                      <EnvelopeIcon className="size-5"/>
                      <p className={paragraphStyle}>Contact</p>
                  </Button>
                </li>
                
              </ul>
          
        </nav>
      </Container>
    </header>
  )
}

export default Header