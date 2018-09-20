import ACTION_TYPES from './actionTypes'
import produce from 'immer'

const initialState = {
    test: 'hei'
}

export default (state = initialState, action) => produce(state, draft => {

})