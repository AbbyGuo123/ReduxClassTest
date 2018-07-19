import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './Reducer/index'
import App from './App';
import {Provider} from "react-redux"

const store = createStore(counter)
const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
    <Provider store={store}>
    <App
        // state={store.getState()}
        // onIncrement={() => store.dispatch(increment())}
        // onDecrement={() => store.dispatch(decrement())}
        // onxcrement ={(multipler) => store.dispatch(xcrement(multipler))}
    />
     </Provider>,
    rootEl
)



render()
store.subscribe(render)