import React, {Component} from 'react'

/**
 * @param {KindergartenAction} kindergartenAction
 */
export default kindergartenAction =>
class App extends Component{
    componentDidMount(){
        kindergartenAction.loadCounties()
    }
    onClickMunicipality(municipalityId){
        kindergartenAction.loadKindergartens(municipalityId)
    }
    render(){
        return (
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h1>Kommuner</h1>

                    {this.props.municipality.isLoading &&
                    <span className="fa fa-spinner fa-spin" />
                    }

                    <ul>
                    {this.props.municipalities.map(municipality => (
                        <li key={municipality.kommunenummer} style={{backgroundColor: municipality.selected ? 'red' : 'white'}}>
                            <a href='#' onClick={() => this.onClickMunicipality(municipality.kommunenummer)}>{municipality.kommunenavn}</a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div style={{flex: 1}}>
                    <h1>Barnehager</h1>

                    {this.props.kindergarten.isLoading &&
                    <span className="fa fa-spinner fa-spin" />
                    }

                    <ul>
                    {this.props.kindergartens.map(kindergarten => (
                        <li key={kindergarten.nsrId}>{kindergarten.navn}</li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}