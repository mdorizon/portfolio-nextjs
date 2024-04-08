'use client'

import { PostCardProps, iconComponents } from '@/src/utils/lib/definitions'
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

const PostCard: React.FC<PostCardProps> = ({ title, subtitle, imageUrl, projectButton, button2, category, technologies }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image fill src={imageUrl} alt={title} quality={100} sizes="500px" priority={false} placeholder = 'empty' />
      </div>
      <div className="card-content">
        <div className="card-title-container">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="card-buttons-container">
          <div className="card-skills-container">
            {technologies.map((tech, index) => {
              const IconComponent = iconComponents[tech.icon];
              return (
                <div key={index} className="skill">
                  <div className="skill-content">
                    {IconComponent ? <IconComponent size={22} stroke={1.5} /> : null}
                    <p>{tech.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="card-links-container">
            { button2?.enabled && (
              <a href={button2.url} target="_blank">
                <div className="more-button">
                  <p>{button2.text}</p>
                </div>
              </a>
            )}
            { projectButton?.enabled && (
              <a href={projectButton.url} target="_blank">
                <div className="project-button">
                  <IconBrandGithub size={26} stroke={1.5} />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="category-tag">
        <p>{category}</p>
      </div>
    </div>
  );
}

export default PostCard;