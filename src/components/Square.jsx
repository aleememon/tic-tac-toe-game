import React from 'react'

const Square = ({ value, index, handleClick, isWinning }) => {
    return (
        <button
            key={index}
            className={`
                relative group
                h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20
                rounded-xl
                text-3xl sm:text-4xl font-outfit font-extrabold
                cursor-pointer select-none
                transition-all duration-300 ease-out
                backdrop-blur-md
                border border-white/10
                ${isWinning
                    ? 'bg-gradient-to-br from-violet-500/40 to-fuchsia-500/40 shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-winner-celebrate'
                    : 'bg-white/5 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]'
                }
                ${value ? '' : 'hover:scale-105 active:scale-95'}
                focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
            `}
            onClick={() => handleClick(index)}
        >
            {/* Subtle inner highlight */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            {/* Value with color + animation */}
            {value && (
                <span
                    className={`
                        relative z-10 animate-pop-in
                        ${value === 'X'
                            ? 'bg-gradient-to-br from-violet-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]'
                            : 'bg-gradient-to-br from-cyan-300 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(94,234,212,0.6)]'
                        }
                    `}
                >
                    {value}
                </span>
            )}

            {/* Hover hint for empty squares */}
            {!value && (
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300 text-white/50 text-3xl pointer-events-none">
                    ·
                </span>
            )}
        </button>
    )
}

export default Square