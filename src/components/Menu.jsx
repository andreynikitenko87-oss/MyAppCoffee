import espressoImg from '../assets/espresso.svg'
import cappuccinoImg from '../assets/cappuccino.svg'
import latteImg from '../assets/latte.svg'
import americanoImg from '../assets/americano.svg'

const menuItems = [
  { name: 'Espresso', price: '$2.50', image: espressoImg },
  { name: 'Cappuccino', price: '$3.50', image: cappuccinoImg },
  { name: 'Latte', price: '$4.00', image: latteImg },
  { name: 'Americano', price: '$2.75', image: americanoImg },
]

export default function Menu() {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} className="coffee-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

