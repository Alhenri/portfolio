import React from 'react'
import PageDefault from '../../Components/PageDefault'
import styled from 'styled-components'
import Slider from '../../Components/Carousel'

const StyledMain = styled.main`
    width: 90%;
    margin-top: 102px;
    height: 80vh;
    margin-bottom:38px;
    background-color: rgba(0, 0, 0, 0);
`

function Projetos(){
    return(
        <PageDefault>
            <StyledMain className="slideClass">
               <Slider />
            </StyledMain>
        </PageDefault>
    )
}

export default Projetos;