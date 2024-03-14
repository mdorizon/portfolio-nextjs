'use client';

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
              <p>Bienvenue sur mon portfolio ! Je suis Maxence Dorizon, un passionné de 19 ans en première année de développement web à l'École Supérieure du Digital (ESD) de Bordeaux. Explorez mon portfolio pour découvrir mon parcours et mes projets.</p>
            </div>
            <div className="header-buttons flex align-center">
              <a href="#contact">
                <div className="contact-me-button">
                  <p>Contactez moi</p>
                </div>
              </a>
              <a href="./src/file/CV.pdf" download>
                <div className="cv-download flex align-center">
                  <p>télécharger CV</p>
                  <i className="ti ti-download"></i>
                </div>
              </a>
            </div>
            <div className="header-socials flex align-start">
              <div className="social-buttons flex flex-dir-col align-center">
                <div className="buttons flex align-center">
                  <a href="https://www.linkedin.com/in/mdorizon/" target="_blank">
                    <div className="linkedin-button flex justify-center align-center">
                      <img src="/icons/linkedin.svg"></img>
                    </div>
                  </a>
                  <a href="https://github.com/mdorizon" target="_blank">
                    <div className="github-button flex justify-center align-center">
                      <i className="ti ti-brand-github"></i>
                    </div>
                  </a>
                  <a href="https://dribbble.com/wakusay" target="_blank">
                    <div className="dribbble-button flex justify-center align-center">
                      <i className="ti ti-brand-dribbble"></i>
                    </div>
                  </a>
                </div>
                <a href="#whoami">
                  <img src="/icons/arrow.svg" className="arrow"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="right-content">
            <img src="/images/logo.jpg" alt="header-logo" className="header-logo" />
            <div className="logo-figma flex justify-center align-center">
              <img src="/icons/figma-icon.svg" alt="figma-icon" className="figma-icon" />
            </div>
            <div className="logo-tailwind flex justify-center align-center">
              <img src="/icons/tailwind-icon.svg" alt="tailwind-icon" className="tailwind-icon" />
            </div>
            <div className="logo-vscode flex justify-center align-center">
              <img src="/icons/vscode-icon.svg" alt="vscode-icon" className="vscode-icon" />
            </div>
            <div className="logo-sass flex justify-center align-center">
              <img src="/icons/sass-icon.svg" alt="sass-icon" className="sass-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};