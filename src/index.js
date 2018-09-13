import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider, connect} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import makeApp from './App'
import KindergartenAction from './KindergartenAction'
import municipalityReducer from './municipalityReducer'
import kindergartenReducer from './kindergartenReducer'
import * as selectors from './selectors'

const reducer = combineReducers({
    municipality: municipalityReducer,
    kindergarten: kindergartenReducer
})
const store = createStore(reducer, composeWithDevTools())

const kindergartenAction = new KindergartenAction(store.dispatch.bind(store), window.fetch.bind(window))

const mapStateToProps = state => ({
    municipality: state.municipality,
    kindergarten: state.kindergarten,
    kindergartens: selectors.selectedKindergartens(state),
    municipalities: selectors.municipalitiesWithSelected(state)
})
const App = connect(mapStateToProps)(makeApp(kindergartenAction))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)