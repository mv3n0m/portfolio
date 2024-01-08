import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from 'utils/windowDimensions'
import WordCloud from 'wordcloud'

// add web3 related stuff
// useDimensions to set width for wordcloud
function Cloud({ darkMode, setParentD }) {
    const el = useRef(null)
    const {width} = useWindowDimensions()
    const [ cloudWidth, setCloudWidth ] = useState(600)

    const words = [
        ["Python", 12],
        ["Javascript", 12],
        ["Reactjs", 11],
        ["Typescript", 11],
        ["Flask", 10],
        ["Solidity", 8],
        ["Nodejs", 11],
        ["Rust", 9],
        ["MongoDB", 10],
        ["PostgreSQL", 6],
        ["Blockchain", 7],
        ["Ethereum", 7],
        ["Web3", 7],
        ["Solana", 5],
        ["NEAR", 4],
        ["Polygon", 4],
        ["Foundry", 6],
        ["Hardhat", 6],
        ["Yul", 4],
        ["WASM", 4],
        ["Django", 6],
        ["Bootstrap", 8],
        ["TailwindCSS", 8],
        ["HTML", 8],
        ["CSS", 7],
        ["AWS", 9],
        ["Bash", 5],
        ["Git", 6],
        ["Vim", 4],
        ["Docker", 5],
        ["Nginx", 5],
        ["OCaml", 4],
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
        if (width < 1300) {
            setParentD("col")
            setCloudWidth(width < 600 ? 350 : 500)
        } else {
            setParentD("row")
            setCloudWidth(width > 1850 ? 900 : width < 1500 ? 500 : 700)
        }
        // console.log(pel.current?.offsetWidth || 1)
        // setCloudWidth(parseInt(width * 0.7) - (pel.current?.offsetWidth || 1))
    }, [width])


    useEffect(() => {
        WordCloud(el.current, {
            list: words,
            backgroundColor: "transparent",
            weightFactor: width > 1450 ? 3 : 2,
            color: (_, w) => colors[12 - w],
            rotateRatio: 0.3,
            rotationSteps: 2,
            fontWeight: "bold",
            fontFamily: "unicode-00xx-square",
            // gridSize: 10,
            shape: "diamond",
            drawMask: true,
            maskColor: "#00000019",
            ellipticity: 0.1
        })
    }, [ darkMode, cloudWidth ])


    return (
        <div className='cloud'>
            <canvas ref={ el } width={ cloudWidth } />
        </div>
    )
}

export default Cloud