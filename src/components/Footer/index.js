import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/hannahmozer/">
        <img src="https://logos.textgiraffe.com/logos/logo-name/Hannah-designstyle-colors-m.png" alt="Logo Alura" />
      </a>
      <p>
        This page is my final project made for
        {' '}
        <a href="https://cs50.harvard.edu/x/2020/">
          CS50.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
