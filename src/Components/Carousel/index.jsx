import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import styles from './style.css'
import snctimg from './assets/snct2019.jpeg'
import kdetimg from './assets/KDET.png'
import fliximg from './assets/reactflix.png'
import reactimg from './assets/reactimg.png'
import circuitoimg from './assets/circuito.jpeg'
import githubIcon from './assets/github.svg'

function Slider() {
    return(
        <AwesomeSlider cssModule={styles}>
            <div>
                <section className="img">
                    <img src={kdetimg} alt=""/>
                    <img src={circuitoimg} alt="" />
                </section>
                <section className="text">
                    <h1>Projeto de hardware e educação</h1>
                    <p>
                        No IFPE faço parte do projeto KDET que conta com a participação de três pesquisadores e dois 
                        professores orientadores. Nosso principal objetivo é apresentar nossa instituição e o curso de 
                        telecomunicações a alunos do ensino médio de outras escolas com a finalidade de incentiva-los a 
                        seguir carreira na área.
                    </p>
                    <p>
                        Meu papel na equipe era desenvolver os circuitos eletrônicos dos kits didáticos que darão apoio às aulas. 
                        Com isso, foi possível aprimorar meus conhecimentos de programação, hardware e redes, além de aprender 
                        conceitos de telecomunicações e evoluir a minha didática de ensino.  
                    <a href="#">Ver mais.</a>
                    </p>
                </section>
            </div>
            
            <div>
                <section className="img">
                    <img src={fliximg} alt="nada"/>
                </section>
                <section className="text">
                    <h1>Projeto de software: Web</h1>
                    <p>
                        O reactflix é um site agregador de conteúdo em video desenvolvido durante a "imerssão react"
                        em agosto de 2020. Durante a imersão aprendi como utilizar o framework react nos projetos de
                        desenvolvimento web.
                    </p>
                    <p>
                        O site é capaz de agregar conteudo em vídeo a partir do cadastro individual deles e das categorias.
                        O frontend está hospedado na vercel, enquanto o backend está na heroku e é responsável por enviar o
                        arquivo JSON que agrega o conteúdo.
                       <a href="https://reactflix-mu.vercel.app" target="_blank">Visitar site.</a>
                    </p>
                    <p>
                        <a href="https://github.com/Alhenri/ReactFlix" target="_blank">
                           <img src={githubIcon} alt="" height="25px"/>Github
                       </a>
                    </p>
                </section>
            </div>
            
            <div>
                <section className="img">
                    <img src={snctimg} alt="nada"/>
                </section>
                <section className="text">
                    <h1>Projeto de hardware e empreendedorismo</h1>
                    <p>Para a semana nacional de ciencia e tecnologia de 2019 no IFPE, participei
                        do evento apresentando um projeto de empreendedorismo na área de IoT.
                    </p>
                    <p>
                        O projeto realizado por mim e mais 4 integrantes visava desenvolver um plano de negócios para uma
                        empresa de automação residencial idealizada por nós, a Hexagon.
                        Além da pesquisa e construção do hardware, no caso, um sistema de irrigação automático,
                        houve muita pesquisa de mercado, fornecedores e concorrentes para avaliar a taxa de sucesso do 
                        empreendimento.
                        <a href="#">Ver mais.</a>
                    </p>
                </section>
            </div>
        
            <div>
                <section className="img">
                    <img src={reactimg} alt="nada"/>
                </section>
                <section className="text">
                    <h1>Projeto de software: web</h1>
                    <p>
                        Esse portfólio foi criado utilizando o React e o styled-components na produção
                        dos componentes do site. Ele ainda se encontra em desenvolvimento e está hospedado na vercel.
                    </p>
                    <p>
                        <a href="https://github.com/Alhenri/Portfolio" target="_blank">
                            <img src={githubIcon} height="25px" alt=""/>Github
                        </a>
                    </p>
                </section>
            </div>
        </AwesomeSlider>
    )
}

export default Slider;