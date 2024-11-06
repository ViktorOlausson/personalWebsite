import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-wrap content-between primary'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default App
