import React from 'react';
import styled from 'styled-components';
import InstaLogo from './assets/instagram.svg'
import EmailLogo from './assets/email.svg'

const FooterBase = styled.footer`

    background-color: rgba(255, 255, 255, 0.700);
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
          <label htmlFor="img">@alhenri_soares</label>
      </a>

      <a href="">
          <img src={EmailLogo} alt="Gmail: " height="15px"/>
          <label htmlFor="img">ahssf@cin.ufpe.br</label>
      </a>

    </FooterBase>
  );
}

export default Footer;
