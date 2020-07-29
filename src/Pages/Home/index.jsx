import React from 'react';
import PageDefault from '../../Components/PageDefault'
import MeImage from './assets/me.png'
import Styled from 'styled-components'

const StyledMain = Styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.26);
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 25px;

  section{
    height: auto;
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 25px;
    margin-top: 25px;
  }
  p {
    font-family: Courier, monospace;
    text-align: justify;
  }
`

function Home() {
  return (
    <>
      <PageDefault>
        <StyledMain>
          <img src={MeImage} height="250"/>

          <section className="text">
              <p>
                  Meu nome é Alexandre Henrique Soares da Silva Filho,
                  sou pernambucano nascido no ano de 2001 em Recife. Cursei todo meu ensino médio e técnico em eletrônica 
                  no IFPE - Campus Recife e  atualmente estou graduando em engenharia da computação na UFPE - Campus Recife.
              </p>
              <p>
                  Escolhi esse curso porque sou apaixonado tanto por software
                  quanto por hardware, além de gostar muito de matemática e física. Já realizei projetos educacionais na minha área
                  como monitoria e iniciação cientifica no projeto KDET durante o curso técnico.
              </p>
          </section>
        </StyledMain>
      </PageDefault>
    </>
  );
}

export default Home;
