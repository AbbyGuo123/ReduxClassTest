import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {increment, decrement, xcrement} from '../actions'
import Counter from './Counter';
import counter from '../reducers'
import CounterContainer from '../Container/CounterContainer';



const store = createStore(counter)
class CounterGroup extends Component {
  

  constructor(props) {
    super(props);

  }

  render() {
    let counters = [];
    const { value, onIncrement, onDecrement ,onxcrement} = this.props
    for(let i=0;i<2;i++){
      counters.push(<CounterContainer
        index={i}
        key = {i}
        // state={state}
        // onIncrement={onIncrement}
        // onDecrement={onDecrement}
        // onxcrement ={onxcrement}
      />)
    }
    return (
      <div className='App'>
      {counters}
      </div>
    );
  }
}

export default CounterGroup;