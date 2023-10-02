import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0
    };
    console.log('constructor in ChildComponent');

  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps in ChildComponent');
    return state;
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate in ChildComponent');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate in ChildComponent');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate in ChildComponent');
  }

  componentDidMount() {
    console.log('In componentDidMount in ChildComponent');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount in ChildComponent');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount in ChildComponent');
  }

  render() {
    console.log('render in ChildComponent');
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increase Counter</button>
      </div>
    );
  }
}

export default ChildComponent;