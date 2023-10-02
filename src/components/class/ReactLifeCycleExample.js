import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ReactLifeCycleExample extends Component {
  constructor(props) {
    super(props);
    this.state={
      showCounter: false
    };
    console.log('constructor in ReactLifeCycleExample');

  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps in ReactLifeCycleExample');
    return state;
  }

  componentDidMount() {
    console.log('In componentDidMount in ReactLifeCycleExample');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount in ReactLifeCycleExample');
  }

  render() {
    console.log('render in ReactLifeCycleExample');
    return (
      <div>
        <h1>This is class component with Lifecycle functions</h1>
        <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}>Show Counter</button> 
        { this.state.showCounter && <ChildComponent /> }       
      </div>
    );
  }
}

export default ReactLifeCycleExample;