import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/computador.svg'
import styled from "styled-components"

const StyleHead = styled.header`
    background-color: rgba(255, 255, 255, 0.116);
    border-radius: 15px;

    height: 65px;
    width: 90%;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    nav ul li a { 
        text-decoration: none; 
        padding: 2px 10px;
        display: inline-block;
    }
`

function Header(){
    return(
        <StyleHead>
                <Link to="/">
                    <img src={Logo} height="50"/>
                </Link>
                <nav id="menu">
                    <ul>
                        <li><Link to="/">Sobre mim</Link></li>
                        <li><Link to="/Projetos">Projetos</Link></li>
                        <li><Link to="/Formação">Formação</Link></li>
                    </ul>
                </nav>
        </StyleHead>
    )
}

export default Header;