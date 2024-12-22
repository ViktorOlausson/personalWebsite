import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Container from '../Container/Container'
import "../../index.css"
import Button from '../Button'
import { HomeIcon, BeakerIcon, BriefcaseIcon, InformationCircleIcon, AcademicCapIcon, OfficeBuildingIcon, CogIcon } from "@heroicons/react/solid"
import {ChevronLeftIcon} from "@heroicons/react/solid"
import Brain from '../icons/Brain';
import Envolope from '../icons/Envolope';

const iconSize = "size-6"
const buttonStyle = "h-full flex items-center duration-300 text-white hover:bg-button-color hover:text-black"
const buttonPadding = "px-3"
const paragraphStyle = "mx-1.5 font-semibold"
const liStyle = "mx-2"
const buttonColor = ""
const heighActive = "max-h-52"
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
    {name: "Education", slug: "/experience/education", icon: <AcademicCapIcon className={iconSize}/>},
    {name: "Work", slug: "/experience/work", icon: <OfficeBuildingIcon className={iconSize}/>}, 
    {name: "Knowledge", slug: "/experience/knowledge", icon: <Brain/>}]},
  {name: "About Me", slug: "/about-me", icon: <InformationCircleIcon className={iconSize}/>},
  {name: "Contact", slug: "/contact", icon: <Envolope/>},
]

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const [hidden, setHidden] = useState(true)
  const [activeMenu, setActiveMenu] = useState(null)
  return (
    <header className='h-12 shadow-md shadow-box-shadow-gray navBackground place-content-center flex overflow-hidden'>
      {/* border frame: border-2 border-border-gray */}
      <Container className='place-content-center h-full ' maxWidth='max-w-9xl' paddingX=''>
        <nav className='flex h-full align-middle'>
          <div className='w-1/6 place-content-center'> {/* Logo div */}
          </div>
              <ul className='flex ml-auto'>

                {navItems.map((item) => item.dropdownItems ? (
                  <li className='mx-1.5' key={item.name}>
                    <Button className={`${buttonStyle}  ${currentPath === item.slug ? "active" : ""}`} bgColor={buttonColor} padding="px-0 pr-1 pl-3"
                    onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)} onClick={() => navigate(item.slug)} >
                      {item.icon}
                      <p className='mx-1.5 font-semibold'>{item.name}</p>
                      <ChevronLeftIcon className={`${hidden ? arrowHidden : arrowShow} transition-all duration-300 size-8 px-0`} strokeWidth={2}/>
                    </Button>
                    <div className={`${hidden ? dropdownUnActive : dropdownActive} w-48`} onMouseEnter={() => 
                    setHidden(false)} onMouseLeave={() => setHidden(true)}>
                      <ul className='flex flex-col py-2 justify-center'>
                        {item.dropdownItems.map((dropdownItem) => (
                          <li className='my-1.5' key={dropdownItem.name}>
                            <Button className={`${buttonStyle} ${currentPath === dropdownItem.slug ? "active" : ""} w-full py-3`} padding={buttonPadding} bgColor={buttonColor}
                            onClick={() => navigate(dropdownItem.slug)}>
                              {dropdownItem.icon}
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