'use client';

import { IconBrandGithub, IconBrandDribbble, IconBrandLinkedin } from '@tabler/icons-react';
import Image from 'next/image';

const SocialsContainer = ({ hasScrollDown } : { hasScrollDown: boolean }) => {

  return (
    <>
      <div className="socials flex align-start">
        <div className="social-buttons flex flex-dir-col align-center">
          <div className="buttons flex align-center">
            <a href="https://www.linkedin.com/in/mdorizon/" target="_blank">
              <div className="linkedin-button flex justify-center align-center">
                <IconBrandLinkedin size={30} stroke={1.8} />
              </div>
            </a>
            <a href="https://github.com/mdorizon" target="_blank">
              <div className="github-button flex justify-center align-center">
                <IconBrandGithub size={30} stroke={1.8} />
              </div>
            </a>
            <a href="https://dribbble.com/wakusay" target="_blank">
              <div className="dribbble-button flex justify-center align-center">
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