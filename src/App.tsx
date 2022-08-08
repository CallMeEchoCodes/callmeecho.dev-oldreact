import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

const Main = (): React.ReactElement => {
  return (
    <>
      <Routes>
        <Route path='*' element={NotFound()} />

        <Route path='/' element={Home()} />
        <Route path='/portfolio' element={Portfolio()} />
      </Routes>
    </>
  )
}

export default Main
