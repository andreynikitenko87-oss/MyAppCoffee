# ⚡ Quick Start: Fresh Coffee with React

Get up and running in 3 minutes!

## 📋 Prerequisites
- **Node.js 16+** (includes npm)
  - [Download Node.js](https://nodejs.org) if you don't have it
  - Verify: `node --version` and `npm --version` in terminal

## 🚀 Setup (3 Steps)

### Step 1: Install Dependencies
Open terminal/PowerShell in the project folder:
```powershell
npm install
```
This downloads React, Vite, and other tools (~30-60 seconds).

### Step 2: Start Development Server
```powershell
npm run dev
```
You'll see:
```
VITE v7.0.0  ready in 123 ms

➜  Local:   http://127.0.0.1:5173/
```

### Step 3: Open in Browser
Click the link or visit: **http://127.0.0.1:5173/**

That's it! 🎉

## 🎮 Try It Out

The website is live. Try these interactive features:

1. **Navigation** - Click links in the header
2. **View Menu** - Click the button in the hero section
3. **Chat** - Click "Ask About It" to open the chatbot
4. **Smooth Scrolling** - Click navigation items

## 🔄 Hot Reload in Action

Make a change to test the magic:

1. Open `src/components/Hero.jsx`
2. Change `"Welcome to Fresh Coffee"` to `"Welcome to My Coffee Shop"`
3. **Save the file** (Ctrl+S)
4. **Watch the browser update instantly** (no refresh needed!)

This is **Hot Module Replacement (HMR)** - it's amazing for development!

## 📂 File Structure Overview

```
src/
├── App.jsx              ← Main component (orchestrates everything)
├── App.css              ← Shared styles
├── main.jsx             ← React entry point (don't change)
└── components/          ← Individual React components
    ├── Header.jsx       ← Navigation
    ├── Hero.jsx         ← Welcome section
    ├── Featured.jsx     ← Featured drink
    ├── Menu.jsx         ← Coffee offerings
    ├── Chat.jsx         ← Chatbot (uses React state!)
    ├── Contact.jsx      ← Contact info
    ├── About.jsx        ← About section
    └── Footer.jsx       ← Footer
```

## 🔍 Understand the Code

Read these files in order:

1. **`src/App.jsx`** - See how all components fit together
2. **`src/components/Hero.jsx`** - Simplest component
3. **`src/components/Menu.jsx`** - Shows list rendering with `.map()`
4. **`src/components/Chat.jsx`** - Shows `useState` in action

## 🧠 Key Concept: Components

Each file in `src/components/` is a **component** - a reusable piece of UI:

```jsx
// This is a component (just a function!)
export default function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Fresh Coffee</h1>
      <p>The freshest coffee experience in town</p>
    </section>
  )
}
```

## 🪝 Understanding React Hooks

The most important concept: **`useState`**

See it in action in `Chat.jsx`:
```jsx
const [messages, setMessages] = useState([...])
// messages: current data
// setMessages: function to update it
```

When you call `setMessages()`, React updates the component automatically!

## 📚 Learn More

- **AGENT.md** - Deep dive into vibe-coding
- **README.md** - Project overview
- **MIGRATION.md** - Why we switched to React
- **ChatGPT/Claude** - Ask about React concepts!

## ❓ Troubleshooting

### "Port 5173 already in use"
Another app is using that port. Either:
- Quit the other app
- Or change the port in `vite.config.js`

### "npm: command not found"
Node.js isn't installed. Download from https://nodejs.org

### Changes aren't showing up
- Make sure you saved the file (Ctrl+S)
- Check the browser console (F12) for errors
- Try a manual refresh (Ctrl+Shift+R)

## 🛑 Stop the Server

Press `Ctrl+C` in the terminal.

## 🏗️ Build for Production

When you're ready to deploy:

```powershell
npm run build
```

This creates an optimized `dist/` folder ready for hosting!

## 🎯 Next Steps

1. ✅ Get the app running (you're here!)
2. 📖 Read `AGENT.md` to understand vibe-coding
3. 🧪 Try modifying components
4. 💡 Ask the AI questions about React
5. 🎨 Build something new

---

**You're all set! Happy coding! ☕⚛️🚀**

Questions? Check AGENT.md or ask your AI assistant.

