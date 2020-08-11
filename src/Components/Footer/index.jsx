import React from 'react';
import styled from 'styled-components';
import InstaLogo from './assets/instagram.svg'
import EmailLogo from './assets/email.svg'

const FooterBase = styled.footer`

    background-color: rgba(255, 255, 255, 0.400);
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    border-radius: 15px;
    padding: 20px 25px;
    margin-bottom: 30px;
    color: black;



`;

function Footer() {
  return (
    <FooterBase>

      <a href="https://www.instagram.com/alhenri_soares/" target="_blank">
          <img src={InstaLogo} alt="Instagram: " height="20px"/>
          @alhenri_soares
      </a>

      <a href="">
          <img src={EmailLogo} alt="Gmail: " height="15px"/>
          ahssf@cin.ufpe.br
      </a>

    </FooterBase>
  );
}

export default Footer;
