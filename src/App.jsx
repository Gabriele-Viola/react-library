import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/About'
import Books from './pages/Books'
import Contacts from './pages/Contancts'
import './App.css'
import DefaultLayout from './Components/DefaultLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
