import React, { useState } from 'react';
import FuncationalComponentWithProps from './FuncationalComponentWithProps';


function FunctionalComponentWithState(props) {
    const [showCounter, setShowCounter] = useState(false);
    const [counter, setCounter] = useState(10);



    const handleClick = () => setCounter(counter + 1);
    return (
        <div>
            <h1>This is functional component with State and Props</h1>
            <button onClick={ () => setShowCounter(!showCounter) }>Show/Hide Counter</button>
            { showCounter && <FuncationalComponentWithProps counter={ counter } handleClick={ handleClick }/> }
        </div>
    );
}

export default FunctionalComponentWithState;