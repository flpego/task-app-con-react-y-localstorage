import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactContext, PrimeReactProvider } from 'primereact/api'
import App from './App'
// import "./App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <App></App>
  </PrimeReactProvider>
)
