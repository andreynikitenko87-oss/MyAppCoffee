# React Architecture Guide

## 🏗️ How React Components Work Together

### The Component Tree

```
┌─────────────────────────────────────────────────────┐
│                   App.jsx                           │
│  • Manages currentPage state                        │
│  • Routes between "home" and "chat"                 │
│  • Passes functions down as props                   │
└────────────┬──────────────────────────┬─────────────┘
             │                          │
             ▼                          ▼
    ┌──────────────────┐      ┌─────────────────┐
    │   Header.jsx     │      │   If Home:      │
    │  • Navigation    │      │  • Hero.jsx     │
    │  • Current page  │      │  • About.jsx    │
    │    awareness     │      │  • Featured.jsx │
    └──────────────────┘      │  • Menu.jsx     │
                              │  • Contact.jsx  │
                              │  • Footer.jsx   │
                              │                 │
                              │   If Chat:      │
                              │  • Chat.jsx     │
                              │    (with state) │
                              └─────────────────┘
```

## 🔄 Data Flow

### Props (Parent → Child)
```
App
  └→ setCurrentPage function passed to components
     └→ Hero, Featured, etc. call it to change page
```

### State (Component Memory)
```
Chat.jsx
  └→ [messages, setMessages] = useState([])
     └→ When user sends message, setMessages() updates
        └→ Component re-renders automatically
```

## 📊 Component Responsibility Map

| Component | Purpose | Type | Uses State |
|-----------|---------|------|-----------|
| **Header** | Navigation button | Stateless | No |
| **Hero** | Landing section | Stateless | No |
| **About** | Company info | Stateless | No |
| **Featured** | Product showcase | Stateless | No |
| **Menu** | List of items | Stateless | No |
| **Chat** | Chatbot interface | **Stateful** | **Yes** |
| **Contact** | Contact info | Stateless | No |
| **Footer** | Copyright | Stateless | No |

## 🎯 State Management Strategy

### Where State Lives

```
App.jsx
├── State: currentPage ("home" or "chat")
├── Function: setCurrentPage
│
├─→ Passes to Header
│   └── Used to: Show active page
│
├─→ Passes to Hero, Featured, Menu
│   └── Used to: Navigate to chat
│
└─→ Passes to Chat
    └── Used to: Return to home
```

## 🔀 Navigation Flow

### Vanilla JS (Old Way)
```
User clicks link
  ↓
Browser loads new HTML file
  ↓
Entire page reloads
  ↓
Styles re-apply
  ↓
JavaScript re-runs
```
⏱️ **Slow, jarring experience**

### React (New Way)
```
User clicks button
  ↓
onClick handler calls setCurrentPage()
  ↓
App state updates
  ↓
React re-renders only changed components
  ↓
DOM updates in place
```
⚡ **Instant, smooth experience**

## 💭 What Happens When...

### When Button is Clicked

```
User clicks → onClick handler
  ↓
Handler calls setCurrentPage('chat')
  ↓
App.jsx state updates
  ↓
React re-renders App component
  ↓
App now shows <Chat /> instead of <Hero />
  ↓
Browser updates only what changed
  ↓
User sees new page instantly!
```

### When User Sends Chat Message

```
User types and clicks Send
  ↓
handleSubmit() function runs
  ↓
setMessages() is called with new message
  ↓
React re-renders Chat.jsx
  ↓
New message appears in chat window
  ↓
After 350ms, bot reply is added
  ↓
Chat window scrolls to bottom
```

## 🧩 How Components Talk to Each Other

### Method 1: Props (Parent → Child)

```jsx
// App.jsx (Parent)
<Featured setCurrentPage={setCurrentPage} />

// Featured.jsx (Child)
export default function Featured({ setCurrentPage }) {
  return <button onClick={() => setCurrentPage('chat')}>Ask</button>
}
```

✅ **One-way flow** (parent controls data)

### Method 2: State Lifting

```jsx
// When child needs to update parent:
// 1. Parent has the state
// 2. Parent passes a function (setState) to child
// 3. Child calls the function
// 4. Parent state updates
// 5. Component re-renders
```

## 🎨 CSS Structure

### Global Styles
```
src/App.css
  ├── Hero styles (.hero)
  ├── Menu styles (.menu-items, .item)
  ├── Chat styles (.chat-panel, .chat-message)
  ├── Responsive (@media)
  └── Utilities (.btn, .sr-only)
```

All components use these shared styles!

## 🔍 Component Dependencies

```
Components that depend on App's state:
  • Header (knows currentPage to show "active" state)
  • Hero (uses setCurrentPage to navigate)
  • Featured (uses setCurrentPage to navigate)
  • Chat (uses setCurrentPage to return home)

Independent components:
  • About (pure presentation)
  • Menu (pure presentation)
  • Contact (pure presentation)
  • Footer (pure presentation)
```

## 🎯 Key Concepts Illustrated

### Props Flow
```jsx
App.jsx                    Header.jsx                Button
  ↓ (passing function)        ↓ (receiving function)    ↓
setCurrentPage              setCurrentPage         onClick calls it
```

### State & Re-render
```jsx
Chat.jsx
  ├── State: [messages]
  ├── Handler: handleSubmit() → setMessages()
  ├── Re-render: Component function called again
  └── Result: Renders new messages
```

### Conditional Rendering
```jsx
App.jsx:
{currentPage === 'home' ? (
  <Hero />    // Rendered when true
) : (
  <Chat />    // Rendered when false
)}
```

## 📈 Scalability

### Current (8 Components)
```
Easy to understand
All in one App.jsx management
No complex state needed
```

### Future Growth (20+ Components)
```
Consider: useContext for shared state
Consider: Redux or Zustand for complex state
Consider: React Router for advanced routing
Consider: Code splitting for performance
```

## 🚦 Component Lifecycle

### Functional Components (What We Use)

```
1. Function called
2. State initialized (useState)
3. Component rendered (return JSX)
4. DOM updated
5. Ready for interaction

Changes:
6. State updates via setState
7. Function called again (steps 2-4)
8. Re-rendered with new state
9. DOM updated
```

**No lifecycle methods needed** - hooks handle everything!

## 💡 Best Practices Shown

✅ **Single Responsibility** - Each component does one thing  
✅ **Props for Configuration** - Pass data from parent  
✅ **State for Dynamic Data** - Use useState for changeable data  
✅ **Event Handlers** - onClick, onSubmit, onChange  
✅ **Separation of Concerns** - Logic separated from presentation  
✅ **Reusable Components** - Header used on all pages  
✅ **Responsive Design** - CSS media queries still work  

## 🔗 Communication Patterns

### Parent Initiates Navigation
```
Header.jsx (child) receives setCurrentPage (function)
onClick → calls setCurrentPage ('chat')
App.jsx (parent) detects state change
App re-renders with <Chat /> visible
```

### Child Needs Parent's State
```
Create setState in parent
Pass function to child
Child calls function
Parent updates, re-renders
```

## 🎓 Learning Path

1. **Understand App.jsx** - Central orchestrator
2. **Understand Header.jsx** - Receives props
3. **Understand Menu.jsx** - Renders lists with .map()
4. **Understand Chat.jsx** - Uses useState hook
5. **Understand flow** - How data moves between components

Then ask: "Why is it structured this way?"

---

This architecture is scalable, maintainable, and follows React best practices! ✨

