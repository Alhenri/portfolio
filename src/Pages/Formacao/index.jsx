import React from 'react'
import Styled from 'styled-components'
import PageDefault from '../../Components/PageDefault'
import IFPELogo from './assets/ifpe-logo.png'
import UFPELogo from './assets/ufpe-logo.png'

const StyledMain = Styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 15px;

  margin-top: 102px;
  margin-bottom: 25px;
  
  section{
    height: auto;
    width: 100%;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 25px;
    margin-top: 25px;
  }

  section#ifpe{
    background-color: rgba(173, 252, 127, 0.37);
  }

  section#ufpe{
    background-color: rgba(252, 127, 127, 0.37);
  }

  p {
    margin-top: 25px;
    font-family: Courier, monospace;
    text-align: justify;
  }
`

function Formacao(){
    return(
        <PageDefault>
            <StyledMain>
                <section id="ifpe">
                    <img src={IFPELogo} height="150" alt=""/>
                    <p>♦ Ensino médio (2016 - 2019)</p>
                    <p>♦ Técnico em eletrônica (2016 - 2019)</p>
                </section>
                <section id="ufpe">
                    <img src={UFPELogo} height="150" alt=""/>
                    <p>♦ Engenharia da computação (2020 - Agora)</p>
                </section>
            </StyledMain>
        </PageDefault>
    )
}

export default Formacao;