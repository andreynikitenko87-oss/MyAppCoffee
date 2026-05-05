import honeyCinnamonImg from '../assets/honey-cinnamon-latte.svg'

export default function Featured({ setCurrentPage }) {
  return (
    <section id="featured">
      <h2>Featured Drink</h2>
      <div className="featured-drink">
        <div className="featured-copy">
          <p className="featured-label">Drink of the Month</p>
          <h3>Honey Cinnamon Latte</h3>
          <p>A smooth espresso latte blended with warm cinnamon, steamed milk, and a light honey finish.</p>
          <div className="featured-details">
            <span>$4.75</span>
            <span>Hot or Iced</span>
          </div>
          <button className="btn" onClick={() => setCurrentPage('chat')}>Ask About It</button>
        </div>
        <div className="featured-image-container">
          <img
            src={honeyCinnamonImg}
            alt="Honey Cinnamon Latte"
            className="featured-coffee-image"
          />
        </div>
      </div>
    </section>
  )
}

