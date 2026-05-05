export default function Hero({ setCurrentPage }) {
  const handleViewMenu = () => {
    setCurrentPage('home')
    setTimeout(() => {
      document.querySelector('#menu').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  return (
    <section id="home" className="hero">
      <h1>Welcome to Fresh Coffee</h1>
      <p>The freshest coffee experience in town</p>
      <button className="btn" onClick={handleViewMenu}>View Menu</button>
    </section>
  )
}

