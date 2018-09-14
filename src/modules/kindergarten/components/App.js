import React, {Component} from 'react'
import styled from 'styled-components'
import Link from '../../../components/Link'

const Page = styled.div`
  display: flex;
  height: 100%;
`
const PageColumn = styled.div`
  flex: 1;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`
const ColumnHeader = styled.div`
  flex: 0 0 100px;
  border-bottom: 1px #aaa solid;
  padding: 15px;
  
  display: flex;
  align-items: center;
  
  > h1{
    margin: 0;
  }
`
const ColumnBody = styled.div`
 flex: 1;
 overflow-y: auto;
 padding: 15px;
`

/**
 * @param {KindergartenAction} kindergartenAction
 */
export default kindergartenAction =>
class App extends Component{
    onClickMunicipality(municipalityId){
        kindergartenAction.loadKindergartens(municipalityId)
    }
    render(){
        return (
            <Page>
                <PageColumn>
                    <ColumnHeader>
                        <h1>Kommuner</h1>
                    </ColumnHeader>
                    <ColumnBody>
                        {this.props.municipality.isLoading &&
                        <span className="fa fa-spinner fa-spin" />
                        }

                        <ul>
                        {this.props.municipalities.map(municipality => (
                            <li key={municipality.kommunenummer} style={{backgroundColor: municipality.selected ? 'red' : 'white'}}>
                                <button className="btn-link" onClick={() => this.onClickMunicipality(municipality.kommunenummer)}>{municipality.kommunenavn}</button>
                            </li>
                        ))}
                        </ul>
                    </ColumnBody>
                </PageColumn>
                <PageColumn>
                    <ColumnHeader>
                        <h1>Barnehager</h1>
                    </ColumnHeader>
                    <ColumnBody>
                        {this.props.kindergarten.isLoading &&
                        <span className="fa fa-spinner fa-spin" />
                        }

                        <ul>
                        {this.props.kindergartens.map(kindergarten => (
                            <li key={kindergarten.nsrId}><Link to={`/${kindergarten.nsrId}`}>{kindergarten.navn}</Link></li>
                        ))}
                        </ul>
                    </ColumnBody>
                </PageColumn>
            </Page>
        )
    }
}