import React, { useState } from 'react';
import ReadingFromContext from './ReadingFromContext';

 export const StateContext = React.createContext({});

function FunctionalComponentWithUseContext(props) {
    const [showCounter, setShowCounter] = useState(false);
    const [counter, setCounter] = useState(10);

    const handleClick = () => setCounter(counter + 1);
    return (
        <StateContext.Provider value= {{
            counter,
            handleClick
        }}>
            <h1>This is functional component with State and Props</h1>
            <button onClick={ () => setShowCounter(!showCounter) }>Show/Hide Counter</button>
            { showCounter && <ReadingFromContext /> }
        </StateContext.Provider>
    ); 
}

export default FunctionalComponentWithUseContext;