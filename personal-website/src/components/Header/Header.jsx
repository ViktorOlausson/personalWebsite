import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Container from '../Container/Container'
import "../../index.css"
import Button from '../Button'
//import { BeakerIcon, HomeIcon, BriefcaseIcon, InformationCircleIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { HomeIcon, BeakerIcon, BriefcaseIcon, InformationCircleIcon } from "@heroicons/react/solid"
import {ChevronLeftIcon} from "@heroicons/react/solid"

const iconSize = "size-6"
const buttonStyle = "h-full flex items-center duration-200 hover:bg-button-color px-3"
const buttonPadding = "px-3"
const paragraphStyle = "mx-1.5 font-semibold"
const liStyle = "mx-2"
const buttonColor = ""
const heighActive = "max-h-32"
const heighUnActive = "max-h-0"
const dropdownStyle = "bg-dropdown-bg absolute overflow-hidden transition-all duration-300"
const dropdownUnActive = `${heighUnActive} ${dropdownStyle}`
const dropdownActive = `${heighActive} ${dropdownStyle}`
const arrowHidden = ""
const arrowShow = "-rotate-90"

const navItems = [
  {name: "Home", slug: "/", icon: <HomeIcon className={iconSize}/>},
  {name: "Projects", slug: "/projects", icon: <BeakerIcon className={iconSize}/>},
  {name: "Experience", slug: "/experience", icon: <BriefcaseIcon className={iconSize}/>, dropdownItems:[
    {name: "Education", slug: "/experience/education"},{name: "Work", slug: "/experience/work"}, {name: "Knowledge", slug: "/experience/knowledge"}]},
  {name: "About Me", slug: "/about-me", icon: <InformationCircleIcon className={iconSize}/>},
  {name: "Contact", slug: "/contact", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
  },
]

//{name: "Education", slug: "/"},{name: "Education", slug: "/"}, {name: "Education", slug: "/"}

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const [hidden, setHidden] = useState(true)
  const [activeMenu, setActiveMenu] = useState(null)
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

                {navItems.map((item) => item.dropdownItems ? (
                  <li className='mx-1.5' key={item.name}>
                    <Button className={`${buttonStyle}  ${currentPath === item.slug ? "active" : ""}`} bgColor={buttonColor} padding="px-0 pr-1 pl-3"
                    onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)} onClick={() => navigate(item.slug)} >
                      {item.icon}
                      <p className='mx-1.5 font-semibold'>{item.name}</p>
                      <ChevronLeftIcon className={`${hidden ? arrowHidden : arrowShow} transition-all duration-300 size-8 px-0`} strokeWidth={2}/>
                    </Button>
                    <div className={`${hidden ? dropdownUnActive : dropdownActive}`} onMouseEnter={() => 
                    setHidden(false)} onMouseLeave={() => setHidden(true)}>
                      <ul className='flex flex-col py-2 justify-center'>
                        {item.dropdownItems.map((dropdownItem) => (
                          <li className='my-1' key={dropdownItem.name}>
                            <Button className={`${buttonStyle} w-full h-8`} padding={buttonPadding} bgColor={buttonColor}
                            onClick={() => navigate(dropdownItem.slug)}>
                              <p className={paragraphStyle}>{dropdownItem.name}</p>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li className='mx-1.5' key={item.name}>
                    <Button className={`${buttonStyle}  ${currentPath === item.slug ? "active" : ""}`} bgColor={buttonColor} padding={buttonPadding} 
                    onClick={() => navigate(item.slug)}>
                      {item.icon}
                      <p className='mx-1.5 font-semibold'>{item.name}</p>
                    </Button>
                  </li>
                ))}
                
              </ul>
          
        </nav>
      </Container>
    </header>

  )
}

export default Header