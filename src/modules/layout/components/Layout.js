import React, {Component} from 'react'
import Link from '../../../components/Link'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Header = styled.div`
  flex: 0 0 100px;
  border-bottom: 1px #aaa solid;
  padding: 15px;
  
  display: flex;
  align-items: center;
  
  > h1{
    margin: 0;
  }
`
const HeaderMenu = styled.div`
  flex: 1;
  
  display: flex;
  justify-content: flex-end;
`
const Body = styled.div`
  flex: 1;
  
  overflow-y: auto;
`

export default class Layout extends Component{
    render(){
        return (
            <Page>
                <Header>
                    <div>
                    <h1>
                        <Link to="/">Barnehage</Link> - {this.props.subtitle}
                    </h1>
                    </div>
                    <HeaderMenu>
                        <Link to="/settings">Settings</Link>
                    </HeaderMenu>
                </Header>
                <Body>
                    {this.props.children}
                </Body>
            </Page>
        )
    }
}