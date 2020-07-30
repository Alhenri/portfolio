import React from 'react'
import PageDefault from '../../Components/PageDefault'
import Styled from 'styled-components'

const StyledSection = Styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.26);
  padding: 10px;
  border-radius: 15px;

  margin-top: 102px;
  margin-bottom: 25px;
`


// Usei uma div pra tirar eles do efeito di header
function NotFound(){
    return(
      <PageDefault>
        <StyledSection>
            <h1>Page not found</h1>
            <h3>Error 404!</h3>
        </StyledSection>
      </PageDefault>
    )
}

export default NotFound;