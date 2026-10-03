import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import './App.css'
import Header from './companents/Header';
import Home from './pages/Home';
import Tarif from './pages/Tarif';
import Servis from './pages/Servis';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tarifs' element={<Servis />} />
          <Route path='/servis' element={<Tarif />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
