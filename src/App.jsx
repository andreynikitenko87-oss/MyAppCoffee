import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Featured from './components/Featured'
import Menu from './components/Menu'
import Chat from './components/Chat'
import Calculator from './components/Calculator'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { coffeeProducts, featuredProduct, menuProducts } from './data/coffeeProducts'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState({})
  const cartTotal = coffeeProducts.reduce(
    (sum, product) => sum + product.price * (cart[product.id] ?? 0),
    0
  )
  const cartItemCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartTotal={cartTotal}
        cartItemCount={cartItemCount}
      />
      {currentPage === 'home' ? (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <About />
          <Featured featuredProduct={featuredProduct} setCurrentPage={setCurrentPage} />
          <Menu menuProducts={menuProducts} setCurrentPage={setCurrentPage} />
          <Contact />
          <Footer />
        </>
      ) : currentPage === 'calculator' ? (
        <Calculator
          products={coffeeProducts}
          cart={cart}
          setCart={setCart}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <Chat setCurrentPage={setCurrentPage} />
      )}
    </>
  )
}

export default App

