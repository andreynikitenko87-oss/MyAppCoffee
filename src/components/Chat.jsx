import { useState, useRef, useEffect } from 'react'

const replies = [
  {
    keywords: ['honey', 'cinnamon', 'featured', 'latte', 'drink'],
    text: 'Our featured drink is the Honey Cinnamon Latte. It has espresso, steamed milk, cinnamon, and a light honey finish. It is $4.75 and can be made hot or iced.'
  },
  {
    keywords: ['price', 'cost', 'how much'],
    text: 'The Honey Cinnamon Latte is $4.75.'
  },
  {
    keywords: ['menu', 'espresso', 'cappuccino', 'americano'],
    text: 'Our menu includes Espresso, Cappuccino, Latte, Americano, and the featured Honey Cinnamon Latte.'
  },
  {
    keywords: ['hour', 'open', 'close'],
    text: 'We are happy to help with hours. Please call us at (123) 456-7890 for today\'s schedule.'
  }
]

export default function Chat({ setCurrentPage }) {
  const [messages, setMessages] = useState([
    { text: 'Hi! Ask me about the Honey Cinnamon Latte, the menu, or our hours.', type: 'bot' }
  ])
  const [input, setInput] = useState('')
  const chatWindowRef = useRef(null)

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight
    }
  }, [messages])

  const getReply = (message) => {
    const normalizedMessage = message.toLowerCase()
    const match = replies.find(reply =>
      reply.keywords.some(keyword => normalizedMessage.includes(keyword))
    )

    return match ? match.text : 'Thanks for asking. For details about that, please call us at (123) 456-7890 or visit us at 123 Coffee Street.'
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedInput = input.trim()
    if (!trimmedInput) return

    // Add user message
    setMessages(prev => [...prev, { text: trimmedInput, type: 'user' }])
    setInput('')

    // Add bot reply after delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: getReply(trimmedInput), type: 'bot' }])
    }, 350)
  }

  return (
    <main className="chat-page">
      <section className="chat-panel" aria-labelledby="chat-title">
        <div className="chat-heading">
          <p className="featured-label">Fresh Coffee Chat</p>
          <h1 id="chat-title">Ask About Our Featured Drink</h1>
        </div>

        <div className="chat-window" ref={chatWindowRef} aria-live="polite">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.type}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <label htmlFor="chat-input" className="sr-only">Type your message</label>
          <input
            id="chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            autoComplete="off"
            required
          />
          <button className="btn" type="submit">Send</button>
        </form>
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          className="btn"
          onClick={() => setCurrentPage('home')}
        >
          Back to Home
        </button>
      </div>
    </main>
  )
}

