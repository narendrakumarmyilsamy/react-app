import React, { useState, useEffect } from 'react';
import FuncationalComponentWithProps from '../stateandprops/FuncationalComponentWithProps';

function FunctionalComponentWithUseEffect(props) {
    const [showCounter, setShowCounter] = useState(false);
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        console.log('First use Effect runs everytime state changes')
    });

    useEffect(() => {
        console.log('Second use Effect runs only when counter changes changes')
    },[counter]);    

    const handleClick = () => setCounter(counter + 1);
    return (
        <div>
            <h1>This is functional component with State and Props</h1>
            <button onClick={ () => setShowCounter(!showCounter) }>Show/Hide Counter</button>
            { showCounter && <FuncationalComponentWithProps counter={ counter } handleClick={ handleClick }/> }
        </div>
    );
}

export default FunctionalComponentWithUseEffect;