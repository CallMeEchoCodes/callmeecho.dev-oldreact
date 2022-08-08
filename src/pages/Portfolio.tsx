import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

function Home (): React.ReactElement {
  useEffect(() => {
    document.documentElement.classList.add('transition-all')
  })

  return (
    <>
      <Navbar />
      <div className='hero min-h-screen text-space-cadet-600 dark:text-silver-pink-600'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold maintext'>Portfolio</h1>
            <p className='py-6'>Heres a list of my best projects</p>
            <a href='#dossier'><h1 className='text-2xl'>↓</h1></a>
          </div>
        </div>
      </div>

      <div className='hero min-h-screen text-space-cadet-600 dark:text-silver-pink-600' id='dossier'>
        <div className='hero-content flex-col lg:flex-row'>
          <img src='https://i.imgur.com/mj9VkpM.png' className='w-925 h-288 rounded-lg shadow-2xl' />
          <div>
            <h1 className='text-5xl font-bold'>Dossier</h1>
            <p className='py-6'>Dossier is a tool that symlinks your dotfiles to where they should be. Allowing you to setup a computer really fast! While other alternatives exist Dossier aims to be simpler than other alternatives with a good user experience and really fast speeds.</p>
            <a className='btn bg-space-cadet-500 dark:bg-silver-pink-500 text-silver-pink-600 dark:text-space-cadet-600' href='https://github.com/CallMeEchoCodes/dossier'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg><p className='ml-1'>Github</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
