import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WebFont from 'webfontloader'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


WebFont.load({
   google: {
     families: ['Lato:300,400,700', 'sans-serif', 'Fraunces:300,400,700']
   }
});