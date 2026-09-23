import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Route, Routes} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

)
