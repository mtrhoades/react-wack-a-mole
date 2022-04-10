// IMPORTS
import React from 'react';
import { useEffect } from 'react';
import moleImg from '../mole.png'

// COMPONENT
export default function Mole(props) {
    // VANILLS JS SECTION:
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })


    // JSX SECTION:
    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}

