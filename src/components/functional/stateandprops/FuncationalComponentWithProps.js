import React from 'react';

function FuncationalComponentWithProps(props) {
    return (
        <div>
            <h1>This is functional component with State and Props</h1>
            <p>Counter: { props.counter} </p>
            <button onClick={ () => props.handleClick() }>Increase Counter</button>
        </div>
    );
}

export default FuncationalComponentWithProps;