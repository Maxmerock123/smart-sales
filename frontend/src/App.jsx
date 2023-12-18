import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import Header from './components/Header'
import GeneralForm from './components/GeneralForm'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from './pages/FormPage'
import ServicesPage from './pages/ServicesPage'
import MenuPage from './pages/MenuPage'
import PackagePage from './pages/PackagePage'
import SummaryPage from './pages/SummaryPage'
import './index.css'
import PlacePage from './pages/PlacePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className={style.body}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<FormPage />} />
            <Route path='/PlacePage' element={<PlacePage />} />
            <Route path='/PackagePage' element={<PackagePage />} />
            <Route path='/MenuPage' element={<MenuPage />} />
            <Route path='/SummaryPage' element={<SummaryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
