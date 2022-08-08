import React from 'react'

function AboutHero (): React.ReactElement {
  return (
    <div className='hero min-h-screen text-space-cadet-600 dark:text-silver-pink-600' id='aboutme'>
      <div className='hero-content text-center'>
        <div className='w-full'>
          <h1 className='text-5xl font-bold'>About me</h1>
          <br />
          <p>
            I'm a developer who focuses on web development and Linux command line tools tools such as
            <code className='bg-silver-pink-400 dark:bg-space-cadet-800 ml-1 font-mono'><a href='https://github.com/CallMeEchoCodes/dossier'>dossier</a></code>,
            <code className='bg-silver-pink-400 dark:bg-space-cadet-800 ml-1 font-mono'><a href='https://github.com/CallMeEchoCodes/fetcho'>fetcho</a></code> and more!<br />
            As a self-taught developer, I have a passion for learning new things and I'm always trying to improve myself and expand my skillset with new libraries, languages and frameworks.
            Other than coding, I love to play <code className='bg-silver-pink-400 dark:bg-space-cadet-800 font-mono'><a href='https://www.celestegame.com/'>Celeste</a></code>, <code className='bg-silver-pink-400 dark:bg-space-cadet-800 font-mono'><a href='https://minecraft.net/'>Minecraft</a></code>, <code className='bg-silver-pink-400 dark:bg-space-cadet-800 font-mono'><a href='https://store.steampowered.com/app/1231880/Haiku_the_Robot/'>Haiku, the Robot</a></code> and occasionally <code className='bg-silver-pink-400 dark:bg-space-cadet-800 font-mono'><a href='https://hollowknight.com'>Hollow Knight</a></code>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
