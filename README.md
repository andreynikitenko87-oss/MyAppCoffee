# Fresh Coffee - React + Vite Edition

A modern, interactive coffee shop website built with **React 18** and **Vite**, demonstrating vibe-coding principles and component-based architecture.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (includes npm)

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server (hot reload enabled)
npm run dev

# Open in browser: http://127.0.0.1:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Main app component with routing
├── App.css              # Global styles
└── components/          # Reusable React components
    ├── Header.jsx       # Navigation
    ├── Hero.jsx         # Landing section
    ├── About.jsx        # Company info
    ├── Featured.jsx     # Highlighted product
    ├── Menu.jsx         # Coffee offerings
    ├── Chat.jsx         # Interactive chatbot
    ├── Contact.jsx      # Contact info
    └── Footer.jsx       # Footer
```

## ⚛️ Key React Concepts

### Components
Reusable pieces of UI. Each component in `src/components/` is a function that returns JSX.

### State
Data that can change. Managed with `useState` hook (see `Chat.jsx` for example).

### Props
Data passed from parent to child components. Used for communication between components.

### Event Handlers
Functions that respond to user interactions (clicks, form submissions, etc.).

## 🎓 Learning Path

1. **Understand the structure**: Look at `src/App.jsx` to see how components fit together
2. **Study a simple component**: Check out `About.jsx` (simplest)
3. **Study a complex component**: Check out `Chat.jsx` (uses useState)
4. **Try modifying**: Change text, colors, or add new menu items in `Menu.jsx`
5. **Create a new component**: Add a Testimonials section following the pattern
6. **Ask questions**: Use the AI to understand concepts like hooks, props, and state

## 🔄 Hot Module Replacement (HMR)

Vite provides instant updates:
- Edit a component → Saved automatically → Refreshed in browser instantly
- No full page reload needed!

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [AGENTS.md](./AGENTS.md) - Codex project instructions
- [AGENT.md](./AGENT.md) - Detailed vibe-coding guide

## 💡 Vibe-Coding Philosophy

This project teaches **vibe-coding** — building software through natural conversation between humans and AI. Focus on:
- Understanding **what** and **why**, not just **how**
- Building iteratively and asking clarifying questions
- Learning React concepts in context

## 🎯 What to Build Next

Ideas for expanding this project:
- ✅ Testimonials/Reviews section with filtering
- ✅ Newsletter signup with form validation
- ✅ Dark mode toggle
- ✅ Real backend integration instead of fake replies
- ✅ Shopping cart for online orders
- ✅ User authentication

## 📝 Notes

- This is an **educational project** designed to teach React and vibe-coding
- The chat feature simulates responses (doesn't call a real AI API)
- Perfect for beginners wanting to learn React the right way

---

**Happy Vibe-Coding! ☕⚛️🚀**

For Codex-specific project guidance, see [AGENTS.md](./AGENTS.md). For the longer human-facing guide, see [AGENT.md](./AGENT.md).

