import { formatPrice } from '../data/coffeeProducts'

export default function Featured({ featuredProduct, setCurrentPage }) {
  if (!featuredProduct) {
    return null
  }

  return (
    <section id="featured">
      <h2>Featured Drink</h2>
      <div className="featured-drink">
        <div className="featured-copy">
          <p className="featured-label">Drink of the Month</p>
          <h3>{featuredProduct.name}</h3>
          <p>{featuredProduct.description}</p>
          <div className="featured-details">
            <span>{formatPrice(featuredProduct.price)}</span>
            <span>Hot or Iced</span>
          </div>
          <button className="btn" onClick={() => setCurrentPage('chat')}>Ask About It</button>
        </div>
        <div className="featured-image-container">
          <img
            src={featuredProduct.image}
            alt={featuredProduct.name}
            className="featured-coffee-image"
          />
        </div>
      </div>
    </section>
  )
}

