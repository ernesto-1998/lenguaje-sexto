import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UnitContextProvider } from "./contexts/UnitContext.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UnitContextProvider>
      <App />
    </UnitContextProvider>
  </React.StrictMode>,
)
