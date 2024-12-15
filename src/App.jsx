import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'

import Tracks from './components/Tracks'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <About/>
      <Resume/>
      <Tracks/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
