'use client';


import SocialsContainer from "../components/socials_buttons";
import { navLinks } from "../components/navigation";

export default function Footer() {

  return (
    <>
      <footer>
        <div className="contact-me" id="contact">
          <div className="contact-container">
            <h3>Me contacter</h3>
            <div className="contact">
              <h1 className="text-copy">mdorizon17@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-container">
            <div className="infos">
              <p>MAIL : <span className="text-copy">mdorizon17@gmail.com</span></p>
              <p>TEL : <a className="tel-hover" href="tel:+33768501007">+33 7 68 50 10 07</a></p>
              <SocialsContainer hasScrollDown={false} />
            </div>
            <div className="nav-items">
              {navLinks.map((link) => (
                <a key={link.id} href={link.href}>
                  <li>{link.text}</li>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};