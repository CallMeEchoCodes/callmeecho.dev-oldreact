import React from 'react'
import { HashLink } from 'react-router-hash-link'

function MainHero (): React.ReactElement {
  return (
    <div className='hero min-h-screen text-space-cadet-600 dark:text-silver-pink-600'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold maintext'>Hiya! I'm Echo.</h1>
          <p className='py-6'>I'm a developer who loves to code random and usually useless stuff.</p>
          <HashLink to='/#aboutme'><h1 className='text-2xl'>↓</h1></HashLink>
        </div>
      </div>
    </div>
  )
}

export default MainHero
