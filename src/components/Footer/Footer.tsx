import { FC } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaPhoneSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface FooterPropsInterface {}

const Footer: FC<FooterPropsInterface> = () => {
  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <ul className={styles.social_icon}>
          <li>
            <Link to="">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaPhoneSquare />
            </Link>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <p className={styles.copyright}>
              © 2024 Golden Link | All Rights Reserved
            </p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
