import createOnAppStart from './setup/createOnAppStart'
import createConfig from './setup/createConfig'
import configureRedux from './setup/configureRedux'
import {createReduxFirstRouter, createRouteRenderer, routeReducer} from './setup/configureRouting'

import configureLayout from './modules/layout/configure'
import configureKindergarten from './modules/kindergarten/configure'
import configureSettings from './modules/settings/configure'

export default () => {
    const actions = {}
    const getActions = () => actions

    const config = createConfig()
    const reduxFirstRouter = createReduxFirstRouter({getActions, config})
    const redux = configureRedux({routeReducer, reduxFirstRouter})
    const onAppStart = createOnAppStart({reduxFirstRouter})

    const layout = configureLayout()
    const kindergarten = configureKindergarten({reduxDispatch: redux.dispatch, Layout: layout.Layout})
    const settings = configureSettings({reduxDispatch: redux.dispatch, Layout: layout.Layout})

    actions.KindergartenAction = kindergarten.kindergartenAction

    const RouteRenderer = createRouteRenderer({
        RouteMain: kindergarten.RouteMain,
        RouteDetails: kindergarten.RouteDetails,
        RouteSettings: settings.RouteSettings
    })

    return {
        onAppStart,
        RouteRenderer,
        store: redux.store
    }
}