# 🎮 Tic Tac Toe

A sleek, modern Tic Tac Toe game built with React and styled using Tailwind CSS v4. Features a premium glassmorphism UI with smooth animations, a live scoreboard, and a fully responsive design.

## ✨ Features

- **Two-Player Gameplay** — Classic X vs O turn-based play
- **Live Scoreboard** — Tracks wins for both players across rounds
- **Win Detection** — Highlights the winning line with a celebratory animation
- **Draw Detection** — Recognizes when the board is full with no winner
- **Smooth Animations** — Pop-in marks, pulsing glow, shimmer effects, and gradient shifts
- **Responsive Design** — Fits perfectly on any screen size without scrolling
- **Premium UI** — Dark glassmorphism card with ambient background orbs

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI framework |
| [Vite](https://vite.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Outfit](https://fonts.google.com/specimen/Outfit) | — | Google Font |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (or npm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/aleememon/tic-tac-toe-game.git
cd tic-tac-toe-game

# Install dependencies
pnpm install

# Start the dev server
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
tic-tac-toe-game/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Board.jsx        # 3×3 game grid
│   │   └── Square.jsx       # Individual square button
│   ├── App.jsx              # Game logic, state, and layout
│   ├── index.css            # Tailwind imports, theme, and animations
│   └── main.jsx             # React entry point
├── index.html               # HTML shell with font preloading
├── vite.config.js           # Vite + Tailwind plugin config
├── package.json
└── eslint.config.js
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm run dev` | Start the Vite dev server with HMR |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run lint` | Run ESLint |

## 🎨 Design Highlights

- **Glassmorphism card** with subtle backdrop blur and border opacity
- **Ambient gradient orbs** for a dynamic background
- **Animated gradient title** that shifts colors continuously
- **Color-coded players** — violet/fuchsia for X, cyan/emerald for O
- **Active turn indicator** that highlights the current player's score card
- **Winning celebration** with scale + rotate animation on winning squares

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
