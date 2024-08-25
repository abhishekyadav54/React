import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InputBox from './Components/InputBox.jsx'
import useCurrencyInfo from './Hooks/UseCurrencyInfo.js'
// import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <InputBox/>,
    <useCurrencyInfo/>
  </StrictMode>,
)
