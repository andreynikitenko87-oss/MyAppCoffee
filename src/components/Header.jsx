export default function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href')

    if (targetId === '#chat') {
      setCurrentPage('chat')
    } else {
      setCurrentPage('home')
      // Smooth scroll to section
      setTimeout(() => {
        const target = document.querySelector(targetId)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 0)
    }
  }

  return (
    <header>
      <nav>
        <div className="logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          Fresh Coffee
        </div>
        <ul>
          <li>
            <button onClick={() => setCurrentPage('home')}>Home</button>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'none' }}>About</a>
          </li>
          <li>
            <a href="#featured" onClick={handleNavClick} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'none' }}>Featured</a>
          </li>
          <li>
            <a href="#menu" onClick={handleNavClick} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'none' }}>Menu</a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'none' }}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

