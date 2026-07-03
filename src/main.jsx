import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routing from './hotelapp/Routing.jsx'
import { Store } from './redux/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <Routing />
    </Provider>
  </StrictMode>,
)
