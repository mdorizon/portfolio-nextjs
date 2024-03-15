'use client';

export default function Skills() {

  return (
    <>
      <section className="skills-section flex flex-dir-col align-center" id="skills">
        <div className="skills-container flex flex-dir-col align-center">
          <h3 className="skills-title">Mes compétences</h3>
          <div className="skills-cards flex">
            <div className="skill-card flex flex-dir-col align-center">
              <div className="skill-content flex flex-dir-col">
                <h3>Langages</h3>
                <hr />
                <ul>
                  <li>HTML | CSS</li>
                  <li>SCSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="skill-card flex flex-dir-col align-center">
              <div className="skill-content flex flex-dir-col">
                <h3>Logiciels</h3>
                <hr />
                <ul>
                  <li>VSCode</li>
                  <li>Figma</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
            <div className="skill-card flex flex-dir-col align-center">
              <div className="skill-content flex flex-dir-col">
                <h3>Frameworks</h3>
                <hr />
                <ul>
                  <li>Boostrap</li>
                  <li>Tailwind</li>
                  <li>Discord.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};