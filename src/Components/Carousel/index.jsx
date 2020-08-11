import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import styles from './styles.css'
import img01 from './assets/img01.png'


function Slider() {
    return(
        <AwesomeSlider cssModule={styles}>
            <div>
                <section className="img">
                </section>
                <section className="text">
                    <p></p>
                </section>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </AwesomeSlider>
    )
}

export default Slider;