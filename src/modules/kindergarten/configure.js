import {connect} from 'react-redux'

import KindergartenAction from './KindergartenAction'

import RouteMain from './components/RouteMain'
import RouteDetails from './components/RouteDetails'
import * as selectors from './selectors'

export default ({reduxDispatch, Layout}) => {
    const kindergartenAction = new KindergartenAction(reduxDispatch, window.fetch.bind(window))

    const ConnectedRouteMain = connect(state => ({
        municipality: state.kindergarten.municipality,
        kindergarten: state.kindergarten.kindergarten,
        kindergartens: selectors.selectedKindergartens(state.kindergarten),
        municipalities: selectors.municipalitiesWithSelected(state.kindergarten)
    }))(RouteMain(Layout, kindergartenAction))

    const ConnectedRouteDetails = connect(state => ({
        kindergartenDetails: state.kindergarten.kindergartenDetails,
        hasTooManyChildren: selectors.kindergartenHasTooManyChildren(state)
    }))(RouteDetails(Layout))

    return {
        RouteMain: ConnectedRouteMain,
        RouteDetails: ConnectedRouteDetails,
        kindergartenAction
    }
}