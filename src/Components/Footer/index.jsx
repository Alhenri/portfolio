import React from 'react';
import styled from 'styled-components';
import InstaLogo from './assets/instagram.svg'
import EmailLogo from './assets/email.svg'


const FooterBase = styled.footer`

    background-color: rgba(255, 255, 255, 0.250);
    display: flex;
    justify-content: space-between;
    height: auto;
    width: 90%;
    align-items: center;
    border-radius: 15px;
    padding: 0px 25px;
    margin-bottom: 30px;
`;

function Footer() {
  return (
    <FooterBase>
      <p>
            <a href="https://www.instagram.com/alhenri_soares/">
                <img src={InstaLogo} alt="Instagram: " height="20px"/>
                @alhenri_soares
            </a>
        </p>
        <p>
            <a href="">
                <img src={EmailLogo} alt="Gmail: " height="15px"/>
                ahssf@cin.ufpe.br
            </a>
        </p>
    </FooterBase>
  );
}

export default Footer;
