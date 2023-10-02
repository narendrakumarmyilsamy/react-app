import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactLifeCycleExample from './components/class/ReactLifeCycleExample';
import FunctionalComponent from './components/functional/FunctionalComponent';
import FunctionalComponentWithState from './components/functional/stateandprops/FunctionalComponentWithState';
import FunctionalComponentWithUseEffect from './components/functional/useEffect/FunctionalComponentWithUseEffect';
import FunctionalComponentWithUseContext from './components/functional/usecontext/FunctionalComponentWithUseContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FunctionalComponentWithUseContext />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
