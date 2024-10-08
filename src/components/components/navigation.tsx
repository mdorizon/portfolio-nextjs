'use client';

import { NavLinks } from "@/src/utils/lib/definitions";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

export const navLinks: NavLinks[] = [
  {id: 1, href: '#whoami', text: 'QUI SUIS-JE ?'},
  {id: 2, href: '#projects', text: 'MES PROJETS'},
  {id: 3, href: '#skills', text: 'MES COMPÉTENCES'},
  {id: 4, href: '#contact', text: 'ME CONTACTER'}
]

const Navigation: React.FC = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

  const HandleSideNav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  }

  return (
    <>
      <nav className={`navbar ${isSidenavOpen === true ? 'nav-no-bg' : ''}`}>
        <div className="nav-items">
          {navLinks.map((link) => (
            <a key={link.id} className="nav-item" href={link.href} ><p>{link.text}</p></a>    
          ))}
          <div className={`sidenav ${isSidenavOpen === true ? 'active' : ''}`}>
            <div className="close" 
            onClick={() => HandleSideNav()}
            >&times;</div>
            <ul className="burger-nav-items">
              {navLinks.map((link) => (
                <a key={link.id} className="burger-nav-item" href={link.href} onClick={() => HandleSideNav()}>
                  <li>{link.text}</li>
                </a> 
              ))}
            </ul>
          </div>
          <div className={`burger-icon ${isSidenavOpen === true ? 'd-none' : ''}`}
          onClick={() => HandleSideNav()}
          >
            <IconMenu2 />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
