import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

function NotFound (): React.ReactNode {
  useEffect(() => {
    document.documentElement.classList.add('transition-all')
  })

  return (
    <>
      <Navbar />
      <div className='hero min-h-screen text-space-cadet-600 dark:text-silver-pink-600'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold maintext'><a href='/'>404 - Page not found</a></h1>
            <p className='py-6'><a href='/'>Click to go back to the homepage</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
