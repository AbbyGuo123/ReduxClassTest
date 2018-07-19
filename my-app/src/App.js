import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';

class App extends Component {

  constructor(props) {
    super(props);

  }

  
  render() {
    const { value, onIncrement, onDecrement ,onxcrement} = this.props;
    return (
        <CounterGroup
        // state={state}
        // onIncrement={onIncrement}
        // onDecrement={onDecrement}
        // onxcrement ={onxcrement}
      />
    );
  }
}

export default App;