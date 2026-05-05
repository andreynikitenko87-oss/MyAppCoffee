import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Featured from './components/Featured'
import Menu from './components/Menu'
import Chat from './components/Chat'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <About />
          <Featured setCurrentPage={setCurrentPage} />
          <Menu />
          <Contact />
          <Footer />
        </>
      ) : (
        <Chat setCurrentPage={setCurrentPage} />
      )}
    </>
  )
}

export default App

