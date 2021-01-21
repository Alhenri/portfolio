import React from 'react';
import PageDefault from '../../Components/PageDefault'
import MeImage from './assets/me.png'
import Styled from 'styled-components'

const StyledMain = Styled.main`
  margin-top: 102px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.600);
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 25px;

  img{
    width: 80%;
    max-width: 350px;
  }
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
    color:black;
  }
`

function Home() {
  return (
    <>
      <PageDefault>
        <StyledMain>
          <img src={MeImage}/>

          <section>
              <p>
                Meu nome é Alexandre Henrique Soares da Silva Filho, nasci em Recife no ano de 2001. Meu ensino médio e o 
                curso de técnico em eletrônica foram feitos no IFPE e atualmente estou iniciando minha graduação (2020.1) 
                em engenharia da computação, na UFPE.
              </p>
              <p>
                Desde pequeno sou apaixonado por matemática e ciências da natureza no geral, eu tinha muita curiosidade 
                em saber como as coisas funcionavam de fato. Hoje em dia, além do amor por matemática e física, também 
                gosto de programar, de pesquisar e criar coisas. Escolhi cursar engenharia da computação por ser muito 
                próximo dos meus interesses atuais. Na área de software sou fascinado por inteligência artificial, visão 
                computacional, segurança da informação e arquitetura de software (minhas linguagens de programação favoritas 
                são typescript, python e C). Em hardware, eu gosto muito de criar coisas, projetar circuitos e programar 
                microcontroladores junto com sensores e atuadores. Tenho certa experiência com hardware por causa da minha 
                formação como técnico em eletrônica, o que me ajuda bastante a por minhas ideias no mundo real. 
              </p>
              <p>
                No meu momento livre gosto de ouvir música, de jogar, assistir filme, ler e programar. 
                Meus gêneros favoritos de filmes e livros são os que envolvem paradoxos, ficção cientifica, 
                história ou filosofia. Na questão de música sou completamente eclético, ouço de tudo, e passo muito 
                tempo ouvindo. 
              </p>
          </section>
        </StyledMain>
      </PageDefault>
    </>
  );
}

export default Home;
