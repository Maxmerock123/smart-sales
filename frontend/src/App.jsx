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
import SummaryPage from './pages/SummaryPage'
import './index.css'
import PlacePage from './pages/PlacePage'
import InsideServices from './pages/InsideServices'
import OutsideServices from './pages/OutsideServices'
import Meeting from './pages/outside/Meeting'
import FormDataContext from './FormDataContext'
import Party from './pages/outside/Party'
import Wedding from './pages/outside/Wedding'
import BhuddistCeremony from './pages/outside/BhuddistCeremony'


function App() {
  const [formData, setFormData] = useState({
    generalForm: {
      name: '',
      number: '',
      email: ''
    },
    eventForm: {
      place: '',
      eventType:'',
      people: '',
      date: '',
    }
  });

  
  return (
    <>
      <FormDataContext.Provider value={{ formData, setFormData }}>
        <div className={style.body}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<FormPage />} />
              <Route path='/PlacePage' element={<PlacePage />} />
              <Route path='PlacePage/InsideServices' element={<InsideServices />} />
              <Route path='PlacePage/OutsideServices' element={<OutsideServices />} />
              <Route path='PlacePage/OutsideServices/Meeting' element={<Meeting />} />
              <Route path='PlacePage/OutsideServices/Party' element={<Party />} />
              <Route path='PlacePage/OutsideServices/Wedding' element={<Wedding />} />
              <Route path='PlacePage/OutsideServices/BhuddistCeremony' element={<BhuddistCeremony />} />
              <Route path='/SummaryPage' element={<SummaryPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </FormDataContext.Provider>
    </>
  )
}

export default App
