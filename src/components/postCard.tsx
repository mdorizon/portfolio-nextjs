'use client'

import { PostCardProps, iconComponents } from '@/src/utils/lib/definitions'
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

const PostCard: React.FC<PostCardProps> = ({ title, subtitle, imageUrl, projectButton, button2, category, technologies }) => {
  return (
    <div className="card flex flex-dir-col">
      <div className="card-image">
        <Image fill src={imageUrl} alt={title} quality={100} sizes="500px" priority={false} placeholder = 'empty' />
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