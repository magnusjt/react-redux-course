import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    CHANGE_NAME: 'CHANGE_NAME'
}

const createCounterActions = dispatch => ({
    increment: () => dispatch({type: ACTION_TYPES.INCREMENT}),
    decrement: () => dispatch({type: ACTION_TYPES.DECREMENT}),
    changeName: name => dispatch({type: ACTION_TYPES.CHANGE_NAME, name})
})

const initialState = {
    value: 0,
    name: ''
}
const counterReducer = (state = initialState, action) => {
    if(action.type === ACTION_TYPES.INCREMENT) return {...state, value: state.value + 1}
    if(action.type === ACTION_TYPES.DECREMENT) return {...state, value: state.value - 1}
    if(action.type === ACTION_TYPES.CHANGE_NAME) return {...state, name: action.name}
    return state
}

const App = props => (
   <div>
       Counter value: {props.counter.value} Counter name: {props.counter.name}
       <br />
       <input value={props.counter.name} onChange={e => props.counterActions.changeName(e.target.value)} />
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