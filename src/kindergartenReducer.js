import ACTION_TYPES from './actionTypes'
import produce from 'immer'

const initialState = {
    isLoading: false,
    kindergartens: {}
}

export default (state = initialState, action) => produce(state, draft => {
    if(action.type === ACTION_TYPES.LOAD_KINDERGARTENS_ATTEMPT){
        draft.isLoading = true
    }

    if([ACTION_TYPES.LOAD_KINDERGARTENS_SUCCESS, ACTION_TYPES.LOAD_KINDERGARTENS_FAILURE].includes(action.type)){
        draft.isLoading = false
    }

    if(action.type === ACTION_TYPES.LOAD_KINDERGARTENS_SUCCESS){
        action.kindergartens.forEach(kindergarten => {
            draft.kindergartens[kindergarten.nsrId] = kindergarten
        })
    }
})