import React from 'react'
import Container from '../Container/Container'
import "../../index.css"

function Header() {
  return (
    <header className='h-12 shadow-md shadow-box-shadow-gray navBackground place-content-center flex'>
      <Container className='place-content-center h-full border-2 border-border-gray' maxWidth='max-w-9xl' paddingX=''>
        <nav className='flex h-full'>
          <div className='w-1/6 place-content-center'> {/* Logo div */}
            {/* <Link to="/">
              <Logo />
            </Link> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header