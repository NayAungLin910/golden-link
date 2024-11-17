import { FC } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaPhoneSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface FooterPropsInterface {}

const Footer: FC<FooterPropsInterface> = () => {
  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <div className={styles.waves}>
          <div className={`${styles.wave} ${styles.wave1}`}></div>
          <div className={`${styles.wave} ${styles.wave2}`}></div>
          <div className={`${styles.wave} ${styles.wave3}`}></div>
          <div className={`${styles.wave} ${styles.wave4}`}></div>
        </div>
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
