'use client';

import Image from "next/image";

export default function Navigation() {

  return (
    <>
      <nav className="navbar flex justify-center">
        <div className="nav-items flex">
          <a className="nav-item" href="#whoami"><p>QUI SUIS-JE ?</p></a>
          <a className="nav-item" href="#projects"><p>MES PROJETS</p></a>
          <a className="nav-item" href="#skills"><p>MES COMPÉTENCES</p></a>
          <a className="nav-item" href="#contact"><p>ME CONTACTER</p></a>
          <div className="sidenav">
            <a id="closeBtn" className="close">&times;</a>
            <div className="burger-nav-items flex flex-dir-col">
              <a className="burger-nav-item" href="#whoami">
                <li>QUI SUIS-JE ?</li>
              </a>
              <a className="burger-nav-item" href="#projects">
                <li>MES PROJETS</li>
              </a>
              <a className="burger-nav-item" href="#skills">
                <li>MES COMPÉTENCES</li>
              </a>
              <a className="burger-nav-item" href="#contact">
                <li>ME CONTACTER</li>
              </a>
            </div>
          </div>
          <a id="openBtn" className="burger-icon">
            <Image src="/icons/burger-menu.svg" width={24} height={24} alt="burger" />
          </a>
        </div>
      </nav>
    </>
  );
}