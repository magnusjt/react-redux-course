import {connect} from 'react-redux'

import KindergartenAction from './KindergartenAction'

import App from './components/App'
import Details from './components/Details'
import * as selectors from './selectors'

export default ioc => {
    ioc.service('Kindergarten.KindergartenAction', ioc => new KindergartenAction(ioc['ReduxDispatch'], window.fetch.bind(window)))

    ioc.service('Kindergarten.App', ioc => connect(state => ({
        municipality: state.kindergarten.municipality,
        kindergarten: state.kindergarten.kindergarten,
        kindergartens: selectors.selectedKindergartens(state.kindergarten),
        municipalities: selectors.municipalitiesWithSelected(state.kindergarten)
    }))(App(ioc['Kindergarten.KindergartenAction'])))

    ioc.service('Kindergarten.Details', ioc => connect(state => ({
        kindergartenDetails: state.kindergarten.kindergartenDetails
    }))(Details()))
}