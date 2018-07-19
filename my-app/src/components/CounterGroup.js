import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {increment, decrement, xcrement} from '../actions'
import Counter from './Counter';
import counter from '../reducers'



const store = createStore(counter)
class CounterGroup extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { state, onIncrement, onDecrement ,onxcrement} = this.props
    return (
      <Counter
        state={state}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onxcrement ={onxcrement}
      />
    );
  }
}

export default CounterGroup;