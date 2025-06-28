'use client';

import SocialsContainer from './socials_buttons';
import Image from 'next/image';
import CtaPrimary from '../ctas/cta_primary';
import CtaSecondary from '../ctas/cta_secondary';

export default function Banner() {

  return (
    <>
      <div className="header-content">
        <div className="container">
          <div className="left-content">
            <div className="header-text">
              <div className="title-container">
                <h2>Hey, je suis Maxence DORIZON</h2>
                <h1>Développeur web</h1>
              </div>
              <p>Bienvenue sur mon portfolio ! Je suis Maxence Dorizon, un passionné de 21 ans en deuxième année de développement web à l&#39;École Supérieure du Digital (ESD) de Bordeaux. Explorez mon portfolio pour découvrir mon parcours et mes projets.</p>
            </div>
            <div className="header-buttons">
              <CtaPrimary link='#contact' text='Contactez moi' />
              <CtaSecondary link='/documents/CV.pdf' text='télécharger CV' />
            </div>
            <SocialsContainer hasScrollDown={true} />
          </div>
          <div className="right-content">
            <Image src="/images/logo.webp" alt="header-logo" className="header-logo" width={400} height={400} />
            <div className="logo logo-figma">
              <Image src="/icons/figma-icon.svg" alt="figma-icon" className="figma-icon" width={30} height={45} />
            </div>
            <div className="logo logo-tailwind">
              <Image src="/icons/tailwind-icon.svg" alt="tailwind-icon" className="tailwind-icon" width={51} height={30} />
            </div>
            <div className="logo logo-vscode">
              <Image src="/icons/vscode-icon.svg" alt="vscode-icon" className="vscode-icon" width={24} height={24} />
            </div>
            <div className="logo logo-sass">
              <Image src="/icons/sass-icon.svg" alt="sass-icon" className="sass-icon" width={54} height={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
