import React from 'react'
import { Link } from 'react-router-dom'
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
                    <img src="https://media.giphy.com/media/k0JPEO1JY2kxxAMxeq/giphy.gif"/>
                </section>
                <section className="text">
                    <h1>Weather app</h1>
                    <p>
                        O site tem a principal função de checar informações sobre o clima de qualquer 
                        local que desejar.
                        Há duas formas de selecionar um local, pela sua localização ou por um mapa. O local pesquisado
                        fica salvo no navegador para consultas posteriores, podendo ser editado ou excluido.
                        <a href="https://github.com/Alhenri/WeatherApp" target="_blank">
                           Mais detalhes<img src={githubIcon} alt="" height="15px"/>
                       </a>
                    </p>
                </section>
            </div>

            <div>
                <section className="img">
                    <img src={kdetimg} alt=""/>
                    <img src={circuitoimg} alt="" />
                </section>
                <section className="text">
                    <h1>Projeto de hardware e educação</h1>
                    <p>
                        No IFPE fiz parte do projeto KDET que conta com a participação de três pesquisadores e dois 
                        professores orientadores. Nosso principal objetivo era apresentar nossa instituição e o curso de 
                        telecomunicações a alunos do ensino médio de outras escolas com a finalidade de incentiva-los a 
                        seguir carreira na área.
                    </p>
                    <p>
                        Meu papel na equipe era desenvolver os circuitos eletrônicos dos kits didáticos que darão apoio às aulas. 
                        Com isso, foi possível aprimorar meus conhecimentos de programação, hardware e redes, além de aprender 
                        conceitos de telecomunicações e evoluir a minha didática de ensino.  
                    <a href="https://www.youtube.com/playlist?list=PLMzWw6fh54Z_nF5NtbNWCphCr78MknrxL" target="_blank">Ver mais.</a>
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
        

        </AwesomeSlider>
    )
}

export default Slider;