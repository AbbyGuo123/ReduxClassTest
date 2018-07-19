import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import {increment, decrement, xcrement} from './actions'
import CounterGroup from './components/CounterGroup'

const store = createStore(counter)
const rootEl = document.getElementById('root')
console.log(xcrement)
const render = () => ReactDOM.render(

    <CounterGroup
        state={store.getState()}
        onIncrement={() => store.dispatch(increment())}
        onDecrement={() => store.dispatch(decrement())}
        onxcrement ={(multipler) => store.dispatch(xcrement(multipler))}
    />,
    rootEl
)



render()
store.subscribe(render)