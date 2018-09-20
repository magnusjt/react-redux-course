import React, {Component} from 'react'

/**
 * @param Layout
 * @param {SettingsAction} settingsAction
 */
export default (Layout, settingsAction) =>
class RouteSettings extends Component{
    render(){
        return (
            <Layout subtitle="Settings">
                Maximum antall barn per ansatt
                <br />
               <input value={this.props.maxChildrenPerEmployee} onChange={e => settingsAction.updateMaxChildrenPerEmployee(e.target.value)} />
            </Layout>
        )
    }
}