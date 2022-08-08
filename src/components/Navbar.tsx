import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar (): React.ReactElement {
  const [darkMode, setDarkMode] = React.useState(localStorage.theme)

  useEffect(() => {
    // this should not work but it does
    if (darkMode === 'true') {
      document.documentElement.classList.remove('bg-silver-pink-500')
      document.documentElement.classList.add('dark')
      document.documentElement.classList.add('bg-space-cadet-500')
      localStorage.setItem('theme', darkMode)
    } else {
      document.documentElement.classList.remove('bg-space-cadet-500')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('bg-silver-pink-500')
      localStorage.setItem('theme', darkMode)
    }
  })

  return (
    <div className='sticky top-0 navbar dark:bg-space-cadet-600 bg-silver-pink-600 text-space-cadet-600 dark:text-silver-pink-600 font-poppins z-10'>
      <div className='flex-1'>
        <Link className='font-semibold normal-case text-xl transition-all hover:scale-110 hover:m-1' to='https://callmeecho.dev'>CallMeEcho</Link>
      </div>

      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a className='bg-silver-pink-500 m-1 dark:bg-space-cadet-500 hover:scale-110 normal-case' href='https://github.com/CallMeEchoCodes'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </a>
          </li>
          <li>
            <Link className='bg-silver-pink-500 m-1 dark:bg-space-cadet-500 hover:scale-110 normal-case' to='/portfolio'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' />
              </svg>
            </Link>
          </li>
          <li>
            <a
              className='bg-silver-pink-500 m-1 dark:bg-space-cadet-500 hover:scale-110 normal-case'
              onClick={() => { if (darkMode === 'true') { setDarkMode('false') } else { setDarkMode('true') } }}
            >
              {darkMode === 'false'
                ? (<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'><path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /></svg>)
                : (<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'><path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' /></svg>)}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
