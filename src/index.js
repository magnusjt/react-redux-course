import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { Provider } from 'react-redux'
import configure from './configure'

const {store, RouteRenderer, onAppStart} = configure()

onAppStart()

ReactDOM.render(
    <Provider store={store}>
        <RouteRenderer />
    </Provider>,
    document.getElementById('root')
)