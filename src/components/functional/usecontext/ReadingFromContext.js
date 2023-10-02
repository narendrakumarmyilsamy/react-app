import React, { useContext } from 'react';
import { StateContext } from './FunctionalComponentWithUseContext';


function ReadingFromContext(props) {
    const context = useContext(StateContext);

    return (
        <div>
            <h1>This is functional component with State and Props</h1>
            <p>Counter: { context.counter} </p>
            <button onClick={ () => context.handleClick() }>Increase Counter</button>
        </div>
    );
}

export default ReadingFromContext;