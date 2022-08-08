import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render((
  <React.StrictMode>
    <HashRouter>
      <App /> {/* The various pages will be displayed by the `Main` component. */}
    </HashRouter>
  </React.StrictMode>
), document.getElementById('root')
)
