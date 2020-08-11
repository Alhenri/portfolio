import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = styled.a`
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    transition: 0.8s;
    margin-left: 5px;

`
function Button({ children, to }){
    return (
        <StyledButton as={Link} to={to}>
            {children}
        </StyledButton>
    )
}

export default Button;