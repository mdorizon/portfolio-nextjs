'use client';

import { IconBrandGithub, IconBrandDribbble, IconBrandLinkedin } from '@tabler/icons-react';
import Image from 'next/image';

const SocialsContainer = ({ hasScrollDown } : { hasScrollDown: boolean }) => {

  return (
    <>
      <div className="socials">
        <div className="social-buttons">
          <div className="buttons">
            <a href="https://www.linkedin.com/in/mdorizon/" target="_blank">
              <div className="button linkedin-button">
                <IconBrandLinkedin size={30} stroke={1.8} />
              </div>
            </a>
            <a href="https://github.com/mdorizon" target="_blank">
              <div className="button github-button">
                <IconBrandGithub size={30} stroke={1.8} />
              </div>
            </a>
            <a href="https://dribbble.com/wakusay" target="_blank">
              <div className="button dribbble-button">
                <IconBrandDribbble size={30} stroke={1.8} />
              </div>
            </a>
          </div>
          {hasScrollDown && (
            <a href="#whoami" >
              <Image src="/icons/arrow.svg" height={38} width={16} className="arrow" alt='scroll arrow' />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialsContainer;