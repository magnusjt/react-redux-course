import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, compose, createStore} from 'redux'
import createReducer from '../createReducer'

export default ({routeReducer, reduxFirstRouter}) => {
    const otherReducers = {location: reduxFirstRouter.reducer, route: routeReducer}
    const reducer = createReducer(otherReducers)

    const store = createStore(
        reducer,
        composeWithDevTools(
            compose(
                reduxFirstRouter.enhancer,
                applyMiddleware(reduxFirstRouter.middleware)
            )
        )
    )

    const getState = () => {
        return store.getState()
    }

    const dispatch = (...args) => {
        try{
            store.dispatch(...args)
        }catch(err){
            console.error('Error during dispatch', err)
        }
    }
    
    return {
        store, getState, dispatch
    }
}