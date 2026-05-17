import React from 'react'
import Square from './Square'

const Board = ({ board, handleClick, winningLine }) => {
    return (
        <div className="grid grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up p-1">
            {board.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    index={index}
                    handleClick={handleClick}
                    isWinning={winningLine && winningLine.includes(index)}
                />
            ))}
        </div>
    )
}

export default Board