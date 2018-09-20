import ACTION_TYPES from './actionTypes'
import produce from 'immer'

const initialState = {
    maxChildrenPerEmployee: 5
}

export default (state = initialState, action) => produce(state, draft => {
    if(action.type === ACTION_TYPES.SET_MAX_CHILDREN_PER_EMPLOYEE){
        draft.maxChildrenPerEmployee = action.maxChildrenPerEmployee
    }
})