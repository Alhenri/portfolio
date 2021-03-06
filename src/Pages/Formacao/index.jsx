import React from 'react'
import Styled from 'styled-components'
import PageDefault from '../../Components/PageDefault'
import IFPELogo from './assets/ifpe-logo.png'
import UFPELogo from './assets/ufpe-logo.png'

const StyledMain = Styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background-color: (0,0,0,0);

  margin-top: 102px;
  margin-bottom: 25px;
  width: 90%;
  
  img{
    width: 80%;
    max-width: 350px;
  }

  section{
    height: auto;
    width: 70%;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 25px;
    margin-top: 25px;
  }

  section#ifpe{
    background-color: rgba(183, 235, 127, 1);
  }

  section#ufpe{
    background-color: rgba(252, 127, 127, 1);
  }

  p {
    margin-top: 25px;
    font-family: Courier, monospace;
    text-align: justify;
    color:black;
  }
`


function Formacao(){
    return(
        <PageDefault>
            <StyledMain>
                <section id="ifpe">
                    <img src={IFPELogo} width="80%" alt=""/>
                    <p>♦ Ensino médio (2016 - 2019)</p>
                    <p>♦ Técnico em eletrônica (2016 - 2019)</p>
                </section>
                <section id="ufpe">
                    <img src={UFPELogo} width="80%" alt=""/>
                    <p>♦ Engenharia da computação (2020 - Agora)</p>
                </section>
            </StyledMain>
        </PageDefault>
    )
}

export default Formacao;