import ACTION_TYPES from './actionTypes'
import produce from 'immer'

const initialState = {
    isLoading: false,
    selectedMunicipality: null,
    municipalities: {}
}

export default (state = initialState, action) => produce(state, draft => {
    if(action.type === ACTION_TYPES.LOAD_COUNTIES_ATTEMPT){
        draft.isLoading = true
    }

    if([ACTION_TYPES.LOAD_COUNTIES_SUCCESS, ACTION_TYPES.LOAD_COUNTIES_FAILURE].includes(action.type)){
        draft.isLoading = false
    }

    if(action.type === ACTION_TYPES.SELECT_MUNICIPALITY){
        draft.selectedMunicipality = action.municipalityId
    }

    if(action.type === ACTION_TYPES.LOAD_COUNTIES_SUCCESS){
        action.data.fylker.forEach(county => {
            county.kommuner.forEach(municipality => {
                draft.municipalities[municipality.kommunenummer] = municipality
            })
        })
    }
})