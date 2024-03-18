// components/PostCard.tsx

import { IconBrandHtml5, IconBrandSass, IconBrandCss3, IconBrandFigma, IconBrandPhp, IconBrandNextjs, IconBrandAngular } from "@tabler/icons-react";

interface ButtonProps {
  text?: string;
  url: string;
  enabled: boolean;
}

const iconComponents = {
  IconBrandFigma: IconBrandFigma,
  IconBrandHtml5: IconBrandHtml5,
  IconBrandSass: IconBrandSass,
  IconBrandCss3: IconBrandCss3,
  IconBrandPhp: IconBrandPhp,
  IconBrandNextjs: IconBrandNextjs,
  IconBrandAngular: IconBrandAngular,
};

interface TechnoProps {
  text: string;
  icon: string;
}

interface PostCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  projectButton?: ButtonProps;
  button2?: ButtonProps;
  category: string;
  technologies: Array<TechnoProps>;
}

const PostCard: React.FC<PostCardProps> = ({ title, subtitle, imageUrl, projectButton, button2, category, technologies }) => {
  return (
    <div className="card flex flex-dir-col webdesign" id="portfolio">
      <img className="postImage" src={imageUrl} alt={title} />
      <div className="card-content flex flex-dir-col align-start justify-between">
        <div className="card-title-container flex flex-dir-col">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="card-buttons-container">
          <div className="card-skills-container flex align-start">
            {technologies.map((tech, index) => {
              const IconComponent = iconComponents[tech.icon];
              return (
                <div key={index} className="html-skill skill flex">
                  <div className="skill-content flex align-center">
                    {IconComponent ? <IconComponent /> : null}
                    <p>{tech.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="card-links-container flex align-center justify-end">
            { projectButton?.enabled && (
              <a href={projectButton.url} target="_blank">
                <div className="project-button flex justify-center align-center">
                  <img src="/icons/github-icon.svg" />
                </div>
              </a>
            )}
            { button2?.enabled && (
              <a href={button2.url} target="_blank">
                <div className="more-button flex justify-center align-center">
                  <p>{button2.text}</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="category-tag flex align-start">
        <p>{category}</p>
      </div>
    </div>
  );
}

export default PostCard;