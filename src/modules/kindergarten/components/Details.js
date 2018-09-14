import React, {Component} from 'react'
import Link from '../../../components/Link'

export default () =>
class Details extends Component{
    render(){
        const {details, isLoading} = this.props.kindergartenDetails
        if(isLoading){
            return <span className="fa fa-spinner fa-spin" />
        }

        if(!details){
            return null
        }

        return (
            <div>
                <Link to="/">Tilbake</Link>
                <ul>
                    <li>Navn: {details.navn}</li>
                    <li>Adresse:
                        <span> {details.kontaktinformasjon.besoksAdresse.adresselinje}</span>
                        <span> {details.kontaktinformasjon.besoksAdresse.postnr}</span>
                        <span> {details.kontaktinformasjon.besoksAdresse.poststed}</span>
                    </li>

                    <li>Antall barn: {details.indikatorDataBarnehage.antallBarn}</li>
                    <li>Antall barn per ansatt: {details.indikatorDataBarnehage.antallBarnPerAnsatt}</li>
                </ul>
            </div>
        )
    }
}