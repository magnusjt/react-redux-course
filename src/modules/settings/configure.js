import connect from 'react-redux/es/connect/connect'
import RouteSettings from './components/RouteSettings'
import SettingsAction from './SettingsAction'

export default ({Layout, reduxDispatch}) => {
    const settingsAction = new SettingsAction(reduxDispatch)

    const ConnectedRouteSettings = connect(state => ({
        maxChildrenPerEmployee: state.settings.maxChildrenPerEmployee
    }))(RouteSettings(Layout, settingsAction))

    return {
        RouteSettings: ConnectedRouteSettings,
        settingsAction
    }
}