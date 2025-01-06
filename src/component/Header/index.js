import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./style.scss";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();
  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <header ref={menuRef}>
      <nav className="navbar navbar-fixed">
        <div className="navbar-left">
          <a href="/" className="logo-link">
            <p className="logo">
              <span className="logo-bracket-open">{"<"}</span>
              <span className="logo-j">J</span>
              <span className="logo-a">a</span>
              <span className="logo-z">z</span>
              <span className="logo-slash">/</span>
              <span className="logo-bracket-close">{">"}</span>
            </p>
          </a>
        </div>

        <div className={`navbar-center ${menu ? "show" : ""}`}>
          <a href="#" onClick={handleMenu}>
            Accueil
          </a>
          <a href="#a-propos-de-moi" onClick={handleMenu}>
            A propos de moi
          </a>
          <a href="#competences" onClick={handleMenu}>
            Compétences
          </a>
          <a href="#projets" onClick={handleMenu}>
            Projets
          </a>
          <a href="#contact" onClick={handleMenu}>
            Contact
          </a>
        </div>
        <div className="navbar-right">
          <a
            target="blank"
            href="https://fr.linkedin.com/in/corentin-cordier-1955a327b?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
          </a>
        </div>

        <div className="burger-menu" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};
