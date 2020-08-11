import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Styled from 'styled-components'

const StyledPage = Styled.div`
    align-items: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    
    `


function PageDefault({ children }){
    return(
        <StyledPage>
            <Header/>
                {children}
            <Footer/>
        </StyledPage>
    )
}

export default PageDefault;