// IMPORTS
import './App.css';
import MoleContainer from './components/MoleContainer';
import { useState} from 'react';


// FUNCTIONAL COMPONENT (PARENT ONE FOR APP)
export default function App() {

  // VANILLA JS SECTION:
    // variables:
  let [score, setScore] = useState(0);

  // functions:
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
        hills.push(
            <MoleContainer
            key={i}
            setScore={setScore}
            score={score} />
        )
    }
    return (
        <div>
            {hills}
        </div>
    )
}

  // JSX SECTION:
  return (
    <div className="App">
        <h1>React-a-Mole!</h1>
        {score}
        {createMoleHill()}
    </div>
  )
}




