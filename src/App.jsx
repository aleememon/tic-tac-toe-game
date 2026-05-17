import React from "react"
import Board from "./components/Board"

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // row wins
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // column wins
    [0, 4, 8], [2, 4, 6],             // diagonal wins
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}

function App() {
  const [board, setBoard] = React.useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = React.useState(true)
  const [scores, setScores] = React.useState({ X: 0, O: 0 })
  const [moveCount, setMoveCount] = React.useState(0)

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setMoveCount(prev => prev + 1);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setMoveCount(0);
  };

  const result = calculateWinner(board);
  const winner = result?.winner;
  const winningLine = result?.line;
  const isDraw = !winner && board.every(Boolean);

  // Update scores when someone wins
  React.useEffect(() => {
    if (winner) {
      setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
    }
  }, [winner]);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-violet-950/50 to-slate-950 font-outfit flex items-center justify-center p-2 overflow-hidden relative">

      {/* Ambient background orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Card */}
      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-7 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl animate-fade-in-up animate-pulse-glow">

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent animate-gradient tracking-tight">
            Tic Tac Toe
          </h1>
          <p className="text-sm text-white/30 tracking-widest uppercase">
            Classic Strategy Game
          </p>
        </div>

        {/* Scoreboard */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className={`flex flex-col items-center px-4 py-1.5 rounded-lg border transition-all duration-300 ${
            !winner && isXNext && !isDraw
              ? 'bg-violet-500/15 border-violet-400/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
              : 'bg-white/[0.03] border-white/[0.06]'
          }`}>
            <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Player X</span>
            <span className="text-xl font-bold bg-gradient-to-br from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">{scores.X}</span>
          </div>

          <div className="text-white/15 text-lg font-light">vs</div>

          <div className={`flex flex-col items-center px-4 py-1.5 rounded-lg border transition-all duration-300 ${
            !winner && !isXNext && !isDraw
              ? 'bg-teal-500/15 border-teal-400/30 shadow-[0_0_20px_rgba(94,234,212,0.2)]'
              : 'bg-white/[0.03] border-white/[0.06]'
          }`}>
            <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Player O</span>
            <span className="text-xl font-bold bg-gradient-to-br from-cyan-300 to-emerald-400 bg-clip-text text-transparent">{scores.O}</span>
          </div>
        </div>

        {/* Status */}
        <div className={`
          px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-500
          ${winner
            ? 'bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/20 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]'
            : isDraw
              ? 'bg-white/[0.06] text-white/50 border border-white/10'
              : 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
          }
        `}>
          {winner
            ? `🎉 ${winner === 'X' ? 'Player X' : 'Player O'} Wins!`
            : isDraw
              ? "🤝 It's a Draw!"
              : `${isXNext ? 'X' : 'O'}'s Turn`
          }
        </div>

        {/* Board */}
        <Board board={board} handleClick={handleClick} winningLine={winningLine} />

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className={`
            group relative px-6 py-2 rounded-xl font-semibold text-sm tracking-wide
            cursor-pointer select-none
            transition-all duration-300
            overflow-hidden
            ${winner || isDraw
              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95'
              : 'bg-white/[0.06] text-white/40 border border-white/[0.08] hover:bg-white/[0.1] hover:text-white/60 hover:border-white/[0.15] active:scale-95'
            }
            focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60
          `}
        >
          <span className="relative z-10">
            {winner || isDraw ? '🔄 Play Again' : '↺ Reset Board'}
          </span>
          {/* Hover shine effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </button>

        {/* Move counter */}
        <p className="text-xs text-white/15 tracking-wider">
          Move {moveCount} of 9
        </p>
      </div>
    </div>
  )
}

export default App
