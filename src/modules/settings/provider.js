import connect from 'react-redux/es/connect/connect'
import RouteSettings from './components/RouteSettings'
import SettingsAction from './SettingsAction'

export default ioc => {
    ioc.service('Settings.SettingsAction', ioc => new SettingsAction(ioc['ReduxDispatch']))

    ioc.service('Settings.RouteSettings', ioc => connect(state => ({
        maxChildrenPerEmployee: state.settings.maxChildrenPerEmployee
    }))(RouteSettings(ioc['Layout.Layout'], ioc['Settings.SettingsAction'])))
}