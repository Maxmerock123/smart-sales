import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import GeneralForm from './components/GeneralForm'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from './pages/FormPage'
import ServicesPage from './pages/ServicesPage'
import MenuPage from './pages/MenuPage'
import PackagePage from './pages/PackagePage'
import SummaryPage from './pages/SummaryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormPage />} />
          <Route path='/ServicesPage' element={<ServicesPage />} />
          <Route path='/PackagePage' element={<PackagePage />} />
          <Route path='/MenuPage' element={<MenuPage />} />
          <Route path='/SummaryPage' element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
