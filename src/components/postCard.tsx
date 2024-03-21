// components/PostCard.tsx

import { IconBrandGithub, IconBrandHtml5, IconBrandSass, IconBrandCss3, IconBrandFigma, IconBrandPhp, IconBrandNextjs, IconBrandAngular } from "@tabler/icons-react";
import Image from "next/image";

// déplacer toutes les interfaces dans l'utils d'interface

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

type IconName = keyof typeof iconComponents;

interface TechnoProps {
  text: string;
  icon: IconName;
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
      <div className="card-image">
        <Image fill src={imageUrl} alt={title} quality={100} />
      </div>
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
                    {IconComponent ? <IconComponent size={22} stroke={1.5} /> : null}
                    <p>{tech.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="card-links-container flex align-center justify-between">
            { projectButton?.enabled && (
              <a href={projectButton.url} target="_blank">
                <div className="project-button flex justify-center align-center">
                  <IconBrandGithub size={26} stroke={1.5} />
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