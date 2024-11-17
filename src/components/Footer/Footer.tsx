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
        <div className={styles.social_icon}>
          <div className={styles.li}>
            <Link to="">
              <FaFacebook />
            </Link>
          </div>
          <div className={styles.li}>
            <Link to="">
              <FaPhoneSquare />
            </Link>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.li}>
            <Link to="">Home</Link>
          </div>
          <div className={styles.li}>
            <Link to="">About</Link>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.li}>
            <p className={styles.copyright}>
              © 2024 Golden Link | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
