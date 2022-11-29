import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Ancestra
      </p>
      <a
        href="https://www.facebook.com/ancestra3/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/ancestra.co"
        className="instagram social"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
        />
      </a>
    </footer>
  );
}

export default Footer;
