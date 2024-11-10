import React from 'react'
import Container from '../Container/Container'
import "../../index.css"
import Button from '../Button'
import { BeakerIcon, ViewfinderCircleIcon, HomeIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'

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
                  <Button className='h-full flex items-center duration-200' rounded='' padding='px-3' bgColor='menuButtonHover'>
                      <HomeIcon className="size-5"/>
                      <p className='px-1.5'>Home</p>
                  </Button>
                </li>
                <li className='mx-2'>
                  <Button className='h-full flex items-center duration-200' rounded='' padding='px-3' bgColor='menuButtonHover'>
                    {/* annan icon?? */}
                      <BeakerIcon className="size-5"/>
                      <p className='mx-1.5'>Projects</p>
                  </Button>
                </li>
              </ul>
          
        </nav>
      </Container>
    </header>
  )
}

export default Header