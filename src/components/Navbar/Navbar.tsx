import { FC, useState } from "react";
import styles from "./Navbar.module.css";
import common from "../../styles/common.module.css";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export interface NavbarPropsInterface {}

const Navbar: FC<NavbarPropsInterface> = () => {
  const [active, setActive] = useState<boolean>(false);

  const navToggle = () => {
    setActive(!active);
  };

  const nav = active
    ? `${styles.nav_menu} ${styles.nav_active}`
    : `${styles.nav_menu}`;

  return (
    <nav className={styles.main_nav}>
      <div className={styles.brand}>
        <Link to="/">
          <img
            src="./golden_link_icon.webp"
            className={styles.nav_img}
            alt=""
          />
        </Link>
      </div>
      <div className={styles.nav}>
        <ul className={nav}>
          <li className={styles.nav_item}>
            <a href="#" className={`${styles.nav_link} ${common.button_gold}`}>
              Home
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={`${styles.nav_link} ${common.button_gold}`}>
              Our Sevices
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={`${styles.nav_link} ${common.button_gold}`}>
              About
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={`${styles.nav_link} ${common.button_gold}`}>
              Contact
            </a>
          </li>
        </ul>
        <div className={styles.nav_toggler}>
          {active ? (
            <IoMdClose onClick={navToggle} className={styles.nav_icon} />
          ) : (
            <FaBars onClick={navToggle} className={styles.nav_icon} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
