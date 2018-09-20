import {combineReducers} from 'redux';

import kindergarten from './modules/kindergarten/reducer'
import settings from './modules/settings/reducer'

export default function(otherReducers = {}){
    return combineReducers({
        kindergarten,
        settings,

        ...otherReducers
    })
}