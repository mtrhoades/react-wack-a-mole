// IMPORTS
import React from 'react'
import Mole from './Mole'
import { useState } from 'react';
import EmptySlot from './EmptySlot';


// COMPONENT
const MoleContainer = (props) => {

    // VANILLA JS SECTION:
        let [theMole, setTheMole] = useState(false)
    
        const handleClick = (e) => {
            props.setScore(props.score + 1)
            setTheMole(false)
        }
    
        let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />
    


    // JSX SECTION:
  return (
    <div style={{'display': 'inline-block', 'width': '30vw'}}>
        {displayMole}
    </div>
  )

}

export default MoleContainer