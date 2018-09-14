import ACTION_TYPES from './actionTypes'
import produce from 'immer'

const initialState = {
    isLoading: false,
    details: null
}

export default (state = initialState, action) => produce(state, draft => {
    if(action.type === ACTION_TYPES.LOAD_KINDERGARTEN_DETAILS_ATTEMPT){
        draft.isLoading = true
    }

    if([ACTION_TYPES.LOAD_KINDERGARTEN_DETAILS_SUCCESS, ACTION_TYPES.LOAD_KINDERGARTEN_DETAILS_FAILURE].includes(action.type)){
        draft.isLoading = false
    }

    if(action.type === ACTION_TYPES.LOAD_KINDERGARTEN_DETAILS_SUCCESS){
        draft.details = action.details
    }
})