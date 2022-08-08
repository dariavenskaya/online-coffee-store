import React from 'react';
import './styles/Footer.css'
// import {Router, Route} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="wrapper footer">
        <div className="github">
            <img src="github.svg" alt="github logo" />
            <a target="_blank" href="https://github.com/dariavenskaya" rel="noreferrer">Daria Venskaya, 2022</a>
        </div>
        <div className="rss">
            <img width={35} src="rsschool.svg" alt="rsschool logo" />
            <a target="_blank" href='https://rs.school/js/' rel="noreferrer">The Rolling Scopes School</a>
        </div>
    </div>
    </>
  );
}

export default Footer;
