'use client';

import SocialsContainer from '../../socials_container';
import { IconDownload } from '@tabler/icons-react';
import Image from 'next/image';

export default function Banner() {

  return (
    <>
      <div className="header-content flex justify-center">
        <div className="container flex align-center">
          <div className="left-content flex flex-dir-col">
            <div className="header-text flex flex-dir-col">
              <div className="title-container">
                <h2>Hey, je suis Maxence DORIZON</h2>
                <h1>Développeur front-end</h1>
              </div>
              <p>Bienvenue sur mon portfolio ! Je suis Maxence Dorizon, un passionné de 19 ans en première année de développement web à l&#39;École Supérieure du Digital (ESD) de Bordeaux. Explorez mon portfolio pour découvrir mon parcours et mes projets.</p>
            </div>
            <div className="header-buttons flex align-center">
              <a href="#contact">
                <div className="contact-me-button">
                  <p>Contactez moi</p>
                </div>
              </a>
              <a href="/documents/CV.pdf" download>
                <div className="cv-download flex align-center">
                  <p>télécharger CV</p>
                  <IconDownload />
                </div>
              </a>
            </div>
            <SocialsContainer hasScrollDown={true} />
          </div>
          <div className="right-content">
            <Image src="/images/logo.jpg" alt="header-logo" className="header-logo" width={400} height={400} />
            <div className="logo-figma flex justify-center align-center">
              <Image src="/icons/figma-icon.svg" alt="figma-icon" className="figma-icon" width={30} height={45} />
            </div>
            <div className="logo-tailwind flex justify-center align-center">
              <Image src="/icons/tailwind-icon.svg" alt="tailwind-icon" className="tailwind-icon" width={51} height={30} />
            </div>
            <div className="logo-vscode flex justify-center align-center">
              <Image src="/icons/vscode-icon.svg" alt="vscode-icon" className="vscode-icon" width={24} height={24} />
            </div>
            <div className="logo-sass flex justify-center align-center">
              <Image src="/icons/sass-icon.svg" alt="sass-icon" className="sass-icon" width={54} height={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};