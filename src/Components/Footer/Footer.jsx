
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaLinkedin,FaGithub  } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="link-area">
        <div className="line1"></div>
        <div className="link">
          <Link href={"https://www.facebook.com/"} className="footer-link" target={"blank"}>
            <FaFacebookF className="icon" />
          </Link>
          <Link href={"https://www.instagram.com/"} className="footer-link" target={"blank"}>
            <FaInstagram className="icon" />
          </Link>
          <Link href={"https://www.youtube.com/"} className="footer-link" target={"blank"}>
            <FaYoutube className="icon" />
          </Link>
          <Link href={"https://github.com/"} className="footer-link" target={"blank"}>
            <FaGithub className="icon" />
          </Link>
          <Link href={"https://www.linkedin.com/in/"} className="footer-link" target={"blank"}>
            <FaLinkedin className="icon" />
          </Link>
          <Link href={"https://www.tiktok.com/"} className="footer-link" target={"blank"}>
            <FaTiktok className="icon" />
          </Link>
        </div>
        <div className="line2"></div>
      </div>
      <div className="title">
        <p className="name">Maya को चिनो </p>
        <p className="copyright">Copyright @ 2024 | Ujjwal Dahal</p>
      </div>
      <div className="nav-link">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;