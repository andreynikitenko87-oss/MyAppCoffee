import { formatPrice } from '../data/coffeeProducts'

export default function Menu({ menuProducts, setCurrentPage }) {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuProducts.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} className="coffee-image" />
            <h3>{item.name}</h3>
            <p>{formatPrice(item.price)}</p>
            <span className="item-description">{item.description}</span>
          </div>
        ))}
      </div>
      <div className="menu-action">
        <button className="btn secondary-btn" onClick={() => setCurrentPage('calculator')}>
          Open Calculator
        </button>
      </div>
    </section>
  )
}

