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
      <section className="skills-section" id="skills">
        <div className="skills-container">
          <h3 className="skills-title">Mes compétences</h3>
          <div className="skills-cards">
            {skillsData.map((data) => (
              <div key={data.id} className="skill-card">
                <div className="skill-content">
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