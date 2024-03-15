'use client';

export default function Projects() {

  return (
    <>
      <section className="projects-section flex flex-dir-col align-center" id="projects">
        <div className="cards-container flex flex-dir-col">
          <div className="sort-buttons flex align-start wrap">
            <div className="sort-button flex justify-center align-center active" id="all">
              <p>tout les projets</p>
            </div>
            <div className="sort-button flex justify-center align-center" id="integration">
              <p>intégration</p>
            </div>
            <div className="sort-button flex justify-center align-center" id="webdesign">
              <p>webdesign</p>
            </div>
            <div className="sort-button flex justify-center align-center" id="php">
              <p>app PHP</p>
            </div>
            <div className="sort-button flex justify-center align-center" id="perso">
              <p>personnels</p>
            </div>
          </div>
          <div className="cards">
            <div className="card flex flex-dir-col webdesign" id="portfolio">
              <div className="card-image"></div>
              <div className="card-content flex flex-dir-col align-start justify-between">
                <div className="card-title-container flex flex-dir-col">
                  <h3>Projet création d&#39;une maquette pour le portfolio</h3>
                  <p>Création de la maquette du portfolio, design crée de 0, avec des inspirations prises sur dribbble, (les inspirations utilisées pour la création sont visibles sur le figma).</p>
                </div>
                <div className="card-buttons-container">
                  <div className="card-skills-container flex align-start">
                    <div className="html-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/html-icon.svg" />
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="css-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/css-icon.svg" />
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/figma-skill-icon.svg" />
                        <p>FIGMA</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/php-icon.svg" />
                        <p>PHP</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card-links-container flex align-center justify-end">
                    <a className="d-none" href="https://github.com/mdorizon/foodies-landing-training" target="_blank">
                      <div className="project-button flex justify-center align-center">
                        <img src="/icons/github-icon.svg" />
                      </div>
                    </a>
                    <a href="https://www.figma.com/file/lpv75N1hQSnSzSeKmcYD6R/portfolio?type=design&node-id=0%3A1&mode=design&t=v1oQIgQMFrVDR33X-1" target="_blank">
                      <div className="more-button flex justify-center align-center">
                        <p>Voir plus</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-tag flex align-start">
                <p>WebDesign</p>
              </div>
            </div>
            <div className="card flex flex-dir-col integration" id="real_customer">
              <div className="card-image"></div>
              <div className="card-content flex flex-dir-col align-start justify-between">
                <div className="card-title-container flex flex-dir-col">
                  <h3>Landing page jessica <br />aroztegui</h3>
                  <p>Landing page pour une vrai cliente proposé comme projet par l&#39;esd, nous devions tous intégrer la maquette, et par la suite une des intégrations à été choisis par l&#39;école pour être l&#39;intégration finale de la cliente !</p>
                </div>
                <div className="card-buttons-container">
                  <div className="card-skills-container flex align-start">
                    <div className="html-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/html-icon.svg" />
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="css-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/css-icon.svg" />
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/figma-skill-icon.svg" />
                        <p>FIGMA</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/php-icon.svg" />
                        <p>PHP</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card-links-container flex justify-between align-center">
                    <a href="https://github.com/mdorizon/jessica_aroztegui" target="_blank">
                      <div className="project-button flex justify-center align-center">
                        <img src="/icons/github-icon.svg" />
                      </div>
                    </a>
                    <a href="https://aroztegui.mdorizon.fr/" target="_blank">
                      <div className="more-button flex justify-center align-center">
                        <p>Voir plus</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-tag flex align-start">
                <p>Intégration</p>
              </div>
            </div>
            <div className="card flex flex-dir-col integration" id="foodies">
              <div className="card-image"></div>
              <div className="card-content flex flex-dir-col align-start justify-between">
                <div className="card-title-container flex flex-dir-col">
                  <h3>Landing page foodies entrainement</h3>
                  <p>foodies est une maquette que nous avions à intégrer pour s&#39;entrainer à l&#39;intégration, elle est une maquette fictive d&#39;entrainement, et fait parti des premières intégrations faites.</p>
                </div>
                <div className="card-buttons-container">
                  <div className="card-skills-container flex align-start">
                    <div className="html-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/html-icon.svg" />
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="css-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/css-icon.svg" />
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/figma-skill-icon.svg" />
                        <p>FIGMA</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/php-icon.svg" />
                        <p>PHP</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card-links-container flex justify-between align-center">
                    <a href="https://github.com/mdorizon/foodies-landing-training" target="_blank">
                      <div className="project-button flex justify-center align-center">
                        <img src="/icons/github-icon.svg" />
                      </div>
                    </a>
                    <a href="https://foodies.mdorizon.fr/" target="_blank">
                      <div className="more-button flex justify-center align-center">
                        <p>Voir plus</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-tag flex align-start">
                <p>Intégration</p>
              </div>
            </div>
            <div className="card flex flex-dir-col integration" id="travee">
              <div className="card-image"></div>
              <div className="card-content flex flex-dir-col align-start justify-between">
                <div className="card-title-container flex flex-dir-col">
                  <h3>Projet découverte de l&#39;intégration</h3>
                  <p>Cette intégration est la toute première que nous avions à faire, elle nous as fait découvrir les bases de l&#39;HTML et CSS !</p>
                </div>
                <div className="card-buttons-container">
                  <div className="card-skills-container flex align-start">
                    <div className="html-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/html-icon.svg" />
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="css-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/css-icon.svg" />
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/figma-skill-icon.svg" />
                        <p>FIGMA</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/php-icon.svg" />
                        <p>PHP</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card-links-container flex justify-between align-center">
                    <a href="https://github.com/mdorizon/Travee-training" target="_blank">
                      <div className="project-button flex justify-center align-center">
                        <img src="/icons/github-icon.svg" />
                      </div>
                    </a>
                    <a href="https://travee.mdorizon.fr/" target="_blank">
                      <div className="more-button flex justify-center align-center">
                        <p>Voir plus</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-tag flex align-start">
                <p>Intégration</p>
              </div>
            </div>
            <div className="card flex flex-dir-col webdesign" id="music-dashboard">
              <div className="card-image"></div>
              <div className="card-content flex flex-dir-col align-start justify-between">
                <div className="card-title-container flex flex-dir-col">
                  <h3>Projet music-dashboard</h3>
                  <p>Ce projet est parmis nos premiers projets de webdesign, nous avions une wireframe d&#39;un dashboard de musique, auquel nous devions y mettre du contenu, couleurs, boutons, sections</p>
                </div>
                <div className="card-buttons-container">
                  <div className="card-skills-container flex align-start">
                    <div className="html-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/html-icon.svg" />
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="css-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/css-icon.svg" />
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/figma-skill-icon.svg" />
                        <p>FIGMA</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/php-icon.svg" />
                        <p>PHP</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card-links-container flex align-center justify-end">
                    <a className="d-none" href="https://github.com/mdorizon/foodies-landing-training" target="_blank">
                      <div className="project-button flex justify-center align-center">
                        <img src="/icons/github-icon.svg" />
                      </div>
                    </a>
                    <a href="https://www.figma.com/file/GCi5kWl7xqoKg1MYabVTyA/Music-Dashboard?type=design&node-id=1%3A5&mode=design&t=7rmP4YdIuGvJDsTw-1" target="_blank">
                      <div className="more-button flex justify-center align-center">
                        <p>Voir plus</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-tag flex align-start">
                <p>WebDesign</p>
              </div>
            </div>
            <div className="card flex flex-dir-col perso" id="vanezia">
              <div className="card-image"></div>
              <div className="card-content flex flex-dir-col align-start justify-between">
                <div className="card-title-container flex flex-dir-col">
                  <h3>Vanezia (serveur minecraft)</h3>
                  <p>Vanezia, est un serveur minecraft que je développe, et gère une équipe de modération, ce projet ma permis d&#39;en apprendre beaucoup sur linux, le développement web, js (création d&#39;un app nodejs), java (création de plugins). <br /><br /> /!\ Projet non visible pour le moment le site est en création /!\ </p>
                </div>
                <div className="card-buttons-container">
                  <div className="card-skills-container flex align-start">
                    <div className="html-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/html-icon.svg" />
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="css-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/css-icon.svg" />
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/figma-skill-icon.svg" />
                        <p>FIGMA</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/php-icon.svg" />
                        <p>PHP</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card-links-container flex align-center justify-end">
                    <a className="d-none" href="https://github.com/mdorizon/foodies-landing-training" target="_blank">
                      <div className="project-button flex justify-center align-center">
                        <img src="/icons/github-icon.svg" />
                      </div>
                    </a>
                    <a href="#" target="_blank" className="d-none">
                      <div className="more-button flex justify-center align-center">
                        <p>Voir plus</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-tag flex align-start">
                <p>Personnel</p>
              </div>
            </div>
            <div className="card flex flex-dir-col php" id="forum-php">
              <div className="card-image"></div>
              <div className="card-content flex flex-dir-col align-start justify-between">
                <div className="card-title-container flex flex-dir-col">
                  <h3>Projet forum PHP</h3>
                  <p>Projet de création d&#39;un forum php en 1 heure, (n&#39;ayant pas encore vu les base de données, les données du forum sont enregistrées dans un fichier json) et la création d&#39;un nouveau post se fait sans compte, l&#39;interface est crée avec bootstrap, le forum contient un système de upvote !</p>
                </div>
                <div className="card-buttons-container">
                  <div className="card-skills-container flex align-start">
                    <div className="html-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/html-icon.svg" />
                        <p>HTML</p>
                      </div>
                    </div>
                    <div className="css-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/css-icon.svg" />
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex d-none">
                      <div className="skill-content flex align-center">
                        <img src="/icons/figma-skill-icon.svg" />
                        <p>FIGMA</p>
                      </div>
                    </div>
                    <div className="figma-skill skill flex">
                      <div className="skill-content flex align-center">
                        <img src="/icons/php-icon.svg" />
                        <p>PHP</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="card-links-container flex align-center justify-end">
                    <a className="d-none" href="https://github.com/mdorizon/foodies-landing-training" target="_blank">
                      <div className="project-button flex justify-center align-center">
                        <img src="/icons/github-icon.svg" />
                      </div>
                    </a>
                    <a href="https://github.com/mdorizon/forum-training" target="_blank">
                      <div className="more-button flex justify-center align-center">
                        <p>Voir plus</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="category-tag flex align-start">
                <p>App PHP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};