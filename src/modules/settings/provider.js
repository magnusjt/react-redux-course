import connect from 'react-redux/es/connect/connect'
import RouteSettings from './components/RouteSettings'

export default ioc => {
    ioc.service('Settings.RouteSettings', ioc => connect(state => ({

    }))(RouteSettings(ioc['Layout.Layout'])))
}