import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/computador.svg'
import styled from "styled-components"
import Button from '../../Components/Button'

const StyleHead = styled.header`
    background-color: rgba(255, 255, 255, 0.600);
    border-radius: 15px;

    position: fixed;
    z-index: 3;
    height: 65px;
    width: 90%;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 10px;
    color: black;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        height: 100%;
        display: flex;
        align-items: center;
    }

    nav a:hover{
        background-color: rgba(255, 255, 255, 0.7);
    }
    /* nav ul{
        height: 100%;
        width: 100%;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
    }

    nav ul li{
        margin-left: 5px;
        height: 25px;
        transition: 0.5s;
    }
    
    nav ul li:hover {
        background-color: rgba(255, 255, 255, 0.700);
    }

    nav ul li a { 
        text-decoration: none; 
        padding: 2px 10px;
        display: inline-block;
    } */
`

function Header(){
    return(
        <StyleHead>
                <Link to="/">
                    <img src={Logo} height="50"/>
                </Link>
                <nav id="menu">
                    <Button to="/">Sobre mim</Button>
                    <Button to="/Projetos">Projetos</Button>
                    <Button to="/Formação">Formação</Button>
                </nav>
        </StyleHead>
    )
}

export default Header;