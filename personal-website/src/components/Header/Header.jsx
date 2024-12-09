import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Container from '../Container/Container'
import "../../index.css"
import Button from '../Button'
import { BeakerIcon, HomeIcon, BriefcaseIcon, InformationCircleIcon, EnvelopeIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

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
  {name: "Home", slug: "/", icon: <HomeIcon className={iconSize}/>,  index: 1},
  {name: "Projects", slug: "/projects", icon: <BeakerIcon className={iconSize}/>,  index: 2},
  {name: "Experience", slug: "/experience", icon: <BriefcaseIcon className={iconSize}/>,  index: 3, dropdownItems:[{}]},
  {name: "About Me", slug: "/about-me", icon: <InformationCircleIcon className={iconSize}/>,  index: 4},
  {name: "Contact", slug: "/contact", icon: <EnvelopeIcon className={iconSize}/>,  index: 5},
]

//{name: "Education", slug: "/"},{name: "Education", slug: "/"}, {name: "Education", slug: "/"}

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const [hidden, setHidden] = useState(true)
  const [activeMenu, setActiveMenu] = useState(null)

  // const _toggleMenu = (id) => {
  //   setActiveMenu((prevActiveMenus) => ({
  //    ...prevActiveMenus,
  //     [id]:!prevActiveMenus[id],
  //   }))
  //   // if (id === activeMenu) {
  //   //     setActiveMenu(null)
  //   //   } else {
  //   //     setActiveMenu(id)
  //   //   }
  // }

  // const handelClickMenu = (id, slug) => {
  //   setActiveMenu(id)
  //   navigate(slug)
  // }
  //setHidden(false) 
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

                {/* <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding} bgColor={buttonColor}>
                      <HomeIcon className="size-5"/>
                      <p className={paragraphStyle}>Home</p>
                  </Button>
                </li>

                <li className='mx-2'>
                  <Button className={buttonStyle} padding={buttonPadding} bgColor={buttonColor} >
                      {navItems[1].icon}
                      <p className={paragraphStyle}>Projects</p>
                  </Button>
                </li>
                
                <li className='mx-2'>
                  <Button className={buttonStyle} bgColor={buttonColor} padding={buttonPadding} onMouseEnter={() => 
                    setHidden(false)} onMouseLeave={() => setHidden(true)}>
                      <BriefcaseIcon className="size-5"/>
                      <p className='mx-1.5 font-semibold'>Experience</p>
                      <ChevronLeftIcon className={`${hidden ? arrowHidden : arrowShow} size-5 stroke-2 transition-all duration-300 `}/>

                  </Button>

                  <div className={`${hidden ? dropdownUnActive : dropdownActive}`} onMouseEnter={() => 
                    setHidden(false)} onMouseLeave={() => setHidden(true)}>
                    <ul className='flex flex-col py-2 justify-center'>
                      <li className='my-1'>
                        <Button className={`${buttonStyle} w-full h-8`} padding={buttonPadding} bgColor={buttonColor}>
                          <p className={paragraphStyle}>Education</p>
                        </Button>
                      </li>
                      <li className='my-1'>
                        <Button className={`${buttonStyle} w-full h-8`} padding={buttonPadding} bgColor={buttonColor}>
                          <p className={paragraphStyle}>Work Experience</p>
                        </Button>
                      </li>
                      <li className='my-1'>
                        <Button className={`${buttonStyle} w-full h-8`} padding={buttonPadding} bgColor={buttonColor}>
                          <p className={paragraphStyle}>Knowledge</p>
                        </Button>
                      </li>
                    </ul>
                  </div>
                  
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
                </li> */}

                {/* {navItems.map((item) => (
                  <li className={liStyle} key={item.name} padding={buttonPadding}>
                    <Button className={buttonStyle} bgColor={buttonColor} padding={buttonPadding} onClick={() => navigate(item.slug)}>
                      {item.icon}
                      <p className={paragraphStyle}>
                        {item.name}
                      </p>
                    </Button>
                  </li>
                ))} */}

                {navItems.map((item) => (
                  <li className={liStyle} key={item.name} padding={buttonPadding}>
                    <Button className={`${buttonStyle}  ${currentPath === item.slug ? "active" : ""}`} bgColor={buttonColor}
                     padding={buttonPadding} onClick={() => navigate(item.slug)}>
                      {item.icon}
                      <p className={paragraphStyle}>
                        {item.name}
                      </p>
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