import { formatPrice } from '../data/coffeeProducts'

function StorefrontIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 9.5 5.5 4h13L20 9.5M4 9.5V19h16V9.5M4 9.5c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3M9 19v-4h6v4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

export default function Header({ currentPage, setCurrentPage, cartTotal, cartItemCount }) {
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
        <div className="nav-right">
          <ul>
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                aria-current={currentPage === 'home' ? 'page' : undefined}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('calculator')}
                aria-current={currentPage === 'calculator' ? 'page' : undefined}
              >
                Calculator
              </button>
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

          <button
            type="button"
            className="nav-order"
            onClick={() => setCurrentPage('calculator')}
            aria-current={currentPage === 'calculator' ? 'page' : undefined}
            aria-label={`Open calculator. ${cartItemCount} items selected. Subtotal ${formatPrice(cartTotal)}.`}
          >
            <span className="nav-order-icon">
              <StorefrontIcon />
              {cartItemCount > 0 ? (
                <span className="nav-order-badge">{cartItemCount}</span>
              ) : null}
            </span>
            <span className="nav-order-copy">
              <span className="nav-order-label">Your Order</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

