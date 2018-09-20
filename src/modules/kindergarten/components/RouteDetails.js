import React, {Component} from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const Header = styled.div`
 padding: 0 15px;
`
const Body = styled.div`
 padding: 15px;
`

export default (Layout) =>
class RouteDetails extends Component{
    render(){
        const {details, isLoading} = this.props.kindergartenDetails

        const getDetail = path => {
            if(isLoading) return <span className="fa fa-spinner fa-spin" />
            if(!_.has(details, path)) return ''
            return _.get(details, path)
        }

        return (
            <Layout subtitle="Detaljer">
                <Header>
                    <h2>{getDetail('navn')}</h2>
                </Header>
                <Body>
                    <ul>
                        <li>Navn: {getDetail('navn')}</li>
                        <li>Adresse:
                            <span> {getDetail('kontaktinformasjon.besoksAdresse.adresselinje')}</span>
                            <span> {getDetail('kontaktinformasjon.besoksAdresse.postnr')}</span>
                            <span> {getDetail('kontaktinformasjon.besoksAdresse.poststed')}</span>
                        </li>

                        <li>Antall barn: {getDetail('indikatorDataBarnehage.antallBarn')}</li>
                        <li>Antall barn per ansatt: {getDetail('indikatorDataBarnehage.antallBarnPerAnsatt')}</li>
                    </ul>
                </Body>
            </Layout>
        )
    }
}