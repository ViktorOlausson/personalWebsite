import React from 'react'
import Container from '../Container/Container'
import "../../index.css"

function Header() {
  return (
    <header className='h-12 shadow-md shadow-box-shadow-gray navBackground'>
      <Container>
        <nav className='flex max-w-3xl'>
          <div className=' bg-red-600 w-1/4 h-full'>
            {/* <Link to="/">
              <Logo />
            </Link> */}
            <p>
              VO
            </p>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header