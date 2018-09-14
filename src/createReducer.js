import {combineReducers} from 'redux';

import kindergarten from './modules/kindergarten/reducer'

export default function(otherReducers = {}){
    return combineReducers({
        kindergarten,

        ...otherReducers
    })
}