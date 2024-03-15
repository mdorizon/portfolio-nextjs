'use client';

import SocialsContainer from "./socials_container";

export default function Footer() {

  return (
    <>
      <footer className="flex flex-dir-col">
        <div className="contact-me flex flex-dir-col align-center" id="contact">
          <div className="contact-container flex flex-dir-col align-center">
            <h3>Me contacter</h3>
            <div className="contact">
              <h1 className="text-copy">mdorizon17@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="footer-links flex flex-dir-col align-center">
          <div className="footer-container flex justify-between">
            <div className="infos flex flex-dir-col align-start justify-center">
              <p>MAIL : <span className="text-copy">mdorizon17@gmail.com</span></p>
              <p>TEL : <a className="tel-hover" href="tel:+33768501007">+33 7 68 50 10 07</a></p>
              <SocialsContainer hasScrollDown={false} />
            </div>
            <div className="nav-items flex flex-dir-col">
              <a href="#whoami">
                <li>QUI SUIS-JE ?</li>
              </a>
              <a href="#projects">
                <li>MES PROJETS</li>
              </a>
              <a href="#skills">
                <li>MES COMPÉTENCES</li>
              </a>
              <a href="#contact">
                <li>ME CONTACTER</li>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};