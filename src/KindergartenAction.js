import ACTION_TYPES from './actionTypes'

// API: http://www.barnehagefakta.no/swagger

export default class KindergartenAction{
    constructor(dispatch, fetch){
        this._dispatch = dispatch
        this._fetch = fetch
    }

    async loadCounties(){
        this._dispatch({type: ACTION_TYPES.LOAD_COUNTIES_ATTEMPT})
        try{
            const response = await this._fetch('http://www.barnehagefakta.no/api/Fylker')
            const data = await response.json()
            this._dispatch({type: ACTION_TYPES.LOAD_COUNTIES_SUCCESS, data})
        }catch(err){
            this._dispatch({type: ACTION_TYPES.LOAD_COUNTIES_FAILURE, error: err.message})
        }
    }

    async loadKindergartens(municipalityId){
        this._dispatch({type: ACTION_TYPES.LOAD_KINDERGARTENS_ATTEMPT})
        try{
            const response = await this._fetch(`http://www.barnehagefakta.no/api/Location/kommune/${encodeURIComponent(municipalityId)}`)
            const kindergartens = await response.json()
            this._dispatch({type: ACTION_TYPES.LOAD_KINDERGARTENS_SUCCESS, kindergartens})
            this._dispatch({type: ACTION_TYPES.SELECT_MUNICIPALITY, municipalityId})
        }catch(err){
            this._dispatch({type: ACTION_TYPES.LOAD_KINDERGARTENS_FAILURE, error: err.message})
        }
    }
}