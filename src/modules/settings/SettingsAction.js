import ACTION_TYPES from './actionTypes'

export default class SettingsAction{
    constructor(dispatch){
        this._dispatch = dispatch
    }

    updateMaxChildrenPerEmployee(maxChildrenPerEmployee){
        this._dispatch({type: ACTION_TYPES.SET_MAX_CHILDREN_PER_EMPLOYEE, maxChildrenPerEmployee})
    }
}