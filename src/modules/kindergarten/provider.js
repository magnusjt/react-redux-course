import {connect} from 'react-redux'

import KindergartenAction from './KindergartenAction'

import RouteMain from './components/RouteMain'
import RouteDetails from './components/RouteDetails'
import * as selectors from './selectors'

export default ioc => {
    ioc.service('Kindergarten.KindergartenAction', ioc => new KindergartenAction(ioc['ReduxDispatch'], window.fetch.bind(window)))

    ioc.service('Kindergarten.RouteMain', ioc => connect(state => ({
        municipality: state.kindergarten.municipality,
        kindergarten: state.kindergarten.kindergarten,
        kindergartens: selectors.selectedKindergartens(state.kindergarten),
        municipalities: selectors.municipalitiesWithSelected(state.kindergarten)
    }))(RouteMain(ioc['Layout.Layout'], ioc['Kindergarten.KindergartenAction'])))

    ioc.service('Kindergarten.RouteDetails', ioc => connect(state => ({
        kindergartenDetails: state.kindergarten.kindergartenDetails
    }))(RouteDetails(ioc['Layout.Layout'])))
}