'use client';

import { SkillData } from "@/src/utils/lib/definitions";

const skillsData: SkillData[] = [
  {id: 1, category: "Langages", skills: [{skill: "HTML | CSS"}, {skill: "SCSS"}, {skill: "JavaScript"}]},
  {id: 2, category: "Logiciels", skills: [{skill: "VSCode"}, {skill: "Figma"}, {skill: "Git"}]},
  {id: 3, category: "Frameworks", skills: [{skill: "Boostrap"}, {skill: "Tailwind"}, {skill: "Discord.js"}]}
]

export default function Skills() {

  return (
    <>
      <section className="skills-section flex flex-dir-col align-center" id="skills">
        <div className="skills-container flex flex-dir-col align-center">
          <h3 className="skills-title">Mes compétences</h3>
          <div className="skills-cards flex">
            {skillsData.map((data) => (
              <div key={data.id} className="skill-card flex flex-dir-col align-center">
                <div className="skill-content flex flex-dir-col">
                  <h3>{data.category}</h3>
                  <hr />
                  <ul>
                    {data.skills.map((data, index) => (
                      <li key={index}>{data.skill}</li>  
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};