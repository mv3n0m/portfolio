import React, { useEffect, useRef } from 'react'
import WordCloud from 'wordcloud'


function Cloud({ darkMode }) {
    const el = useRef(null)
    const words = [
        ["Python", 12],
        ["Javascript", 12],
        ["React", 11],
        ["Flask", 11],
        ["Solidity", 8],
        ["Rust", 4],
        ["Ethereum", 9],
        ["MongoDB", 10],
        ["SQL", 6],
        ["Blockchain", 7],
        ["Web3", 7],
        ["Solana", 4],
        ["Django", 6],
        ["Bootstrap", 8],
        ["HTML", 8],
        ["CSS", 7],
        ["AWS", 9],
        ["Bash", 5],
        ["Git", 6],
        ["Redux", 7],
        ["Vim", 4],
        ["Lua", 4]
    ]
    const colors = [
        "#F2BD5A",
        "#005554",
        "#215641",
        "#EEC16D",
        "#3E877F",
        "#AFC07C",
        "#53B59F",
        "#5FB962",
        darkMode ? "#E3E1D5" : "#10353B"
    ]

    useEffect(() => {
        WordCloud(el.current, {
            list: words,
            backgroundColor: "transparent",
            weightFactor: 3,
            color: (_, w) => colors[12 - w],
            rotateRatio: 0.3,
            rotationSteps: 2,
            fontWeight: "bold",
            gridSize: 30

        })
    }, [ darkMode ])


    return (
        <div className='cloud'>
            <canvas ref={ el } width={ 1000 } />
        </div>
    )
}

export default Cloud