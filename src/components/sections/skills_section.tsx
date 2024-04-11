import { fetchSkills } from "@/src/utils/lib/data";

export default async function Skills() {
  const skillsDatas = await fetchSkills();
  return (
    <>
      <section className="skills-section" id="skills">
        <div className="skills-container">
          <h3 className="skills-title">Mes compétences</h3>
          <div className="skills-cards">
            {skillsDatas.map((data) => (
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