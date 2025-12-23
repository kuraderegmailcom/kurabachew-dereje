import "../styles/footer.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkdin.png";
import emailIcon from "../assets/email.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {new Date().getFullYear()} <span>Kurabachew Dereje</span>. All rights reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://linkedin.com/in/kurabachew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>

          <a href="mailto:kuradere21@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
