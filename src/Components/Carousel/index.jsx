import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import styles from './style.css'
import snctimg from './assets/snct2019.jpeg'


function Slider() {
    return(
        <AwesomeSlider cssModule={styles}>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
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
                        houve muita pesquisa de mercado, fornecedores, concorrentes para avaliar a taxa de sucesso do empreendimento.
                        <a href>Ver mais.</a>
                    </p>
                </section>
            </div>
        </AwesomeSlider>
    )
}

export default Slider;