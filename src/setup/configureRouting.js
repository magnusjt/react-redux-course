import {connect} from 'react-redux'
import {connectRoutes, NOT_FOUND} from 'redux-first-router'
import RouteRenderer from '../components/RouteRenderer'
import createHistory from 'history/createBrowserHistory'

export const ROUTES = {
    ROUTE_MAIN: 'ROUTE_MAIN',
    ROUTE_DETAILS: 'ROUTE_DETAILS',
    ROUTE_SETTINGS: 'ROUTE_SETTINGS'
}

export const createReduxFirstRouter = ({getActions, config}) => {
    const routeMap = {
        [ROUTES.ROUTE_MAIN]: {
            path: `/`,
            thunk: async (dispatch, getState) => {
                /** @type {KindergartenAction} kindergartenAction */
                const kindergartenAction = getActions().KindergartenAction
                kindergartenAction.loadCounties()
            }
        },
        [ROUTES.ROUTE_DETAILS]: {
            path: `/kindergartens/:kindergartenId`,
            thunk: async (dispatch, getState) => {
                /** @type {KindergartenAction} kindergartenAction */
                const kindergartenAction = getActions().KindergartenAction
                kindergartenAction.loadKindergartenDetails(getState().location.payload.kindergartenId)
            }
        },
        [ROUTES.ROUTE_SETTINGS]: {
            path: `/settings`
        },
        [NOT_FOUND]: {
            thunk: async (dispatch, getState) => {
                window.location.replace(config.ROUTE_PREFIX)
            }
        }
    }

    return connectRoutes(createHistory(), routeMap, {initialDispatch: false}) // NB: Prevent initial dispatch. Do that after container is finished setting up to avoid routing before the ioc container is created.
}

const routes = Object.values(ROUTES)
export const routeReducer = (state = ROUTES.ROUTE_MAIN, action) => {
    if(routes.includes(action.type)){
        return action.type
    }
    return state
}

export const createRouteRenderer = ({RouteMain, RouteDetails, RouteSettings}) => {
    const routeToComponentMap = {
        [ROUTES.ROUTE_MAIN]: RouteMain,
        [ROUTES.ROUTE_DETAILS]: RouteDetails,
        [ROUTES.ROUTE_SETTINGS]: RouteSettings
    }

    return connect(state => ({route: state.route}))(RouteRenderer(routeToComponentMap))
}