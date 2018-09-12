import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const createCounterActions = dispatch => ({
    increment: () => dispatch({type: ACTION_TYPES.INCREMENT}),
    decrement: () => dispatch({type: ACTION_TYPES.DECREMENT})
})

const counterReducer = (counter = 0, action) => {
    if(action.type === ACTION_TYPES.INCREMENT) return counter + 1
    if(action.type === ACTION_TYPES.DECREMENT) return counter - 1
    return counter
}

const App = props => (
   <div>
       Counter value: {props.counter}
       <button onClick={() => props.counterActions.increment()}>Increment</button>
       <button onClick={() => props.counterActions.decrement()}>Decrement</button>
   </div>
)

const mapStateToProps = state => ({counter: state})
const mapDispatchToProps = dispatch => ({counterActions: createCounterActions(dispatch)})
const ConnectedAppComponent = connect(mapStateToProps, mapDispatchToProps)(App)

const store = createStore(counterReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <ConnectedAppComponent />
    </Provider>,
    document.getElementById('root')
)