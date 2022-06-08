import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="link">
      Open Source Code:{"   "}
      <a
        href="https://github.com/Void321/React-Weather-App"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
      </a>
      |by: Me{" "}
      <a
        href="https://www.linkedin.com/in/paulettezaldivarflores3"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      | Hosted on{" "}
      <a
        href="https://stupendous-pithivier-e67924.netlify.app/"
        target="blank"
        rel="noreferrer"
      >
        {" "}
        <span className="Netlify">Netlify</span>
      </a>
    </footer>
  );
}
