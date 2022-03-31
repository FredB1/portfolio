import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggler, setToggler] = useState(false);

  function toggleNav() {
    setToggler(!toggler);
  }
  let toggled = toggler ? "noNav" : "navOn";
  return (
    <nav>
      <div className="brand">
        <Link to="/">
          <h1>FRED BURKE</h1>
          <h4>FULL STACK WEB DEVELOPER</h4>
        </Link>
      </div>
      <div className="socials">
        <a href="https://linkedin.com/in/fredb7" className="Linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/FredB1" className="fa ">
          <FontAwesomeIcon icon={faGithubAlt} size="2x" />
        </a>
        <a href="mailto:fburke77@gmail.com" className="fa ">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <FontAwesomeIcon
        onClick={toggleNav}
        icon={faBars}
        className="fa menu"
        size="2x"
      />
      <div className={toggled}>
        <a href="">bob bucher</a>
        <a href="">bob bucher</a>
        <a href="">bob bucher</a>
      </div>
    </nav>
  );
};
export default Header;
