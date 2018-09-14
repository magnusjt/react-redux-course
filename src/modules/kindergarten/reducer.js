import { combineReducers } from 'redux'

import kindergartenDetailsReducer from './kindergartenDetailsReducer'
import kindergartenReducer from './kindergartenReducer'
import municipalityReducer from './municipalityReducer'

export default combineReducers({
    kindergartenDetails: kindergartenDetailsReducer,
    kindergarten: kindergartenReducer,
    municipality: municipalityReducer,
})