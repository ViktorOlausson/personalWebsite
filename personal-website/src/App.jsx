import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-dvh flex flex-wrap al bg-primary'>
      <div className='w-full'>
        <Header/>
        <main className='flex max-h-[96.5dvh] overflow-hidden justify-center pt-0.5 bg-orange-700 flex-col'> {/* body */}
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default App
