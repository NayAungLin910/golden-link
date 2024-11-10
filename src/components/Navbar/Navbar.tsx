import { FC, useState } from "react";
import styles from "./Navbar.module.css";
import common from "../../styles/common.module.css";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export interface NavbarPropsInterface {}

const Navbar: FC<NavbarPropsInterface> = () => {
  const [active, setActive] = useState<boolean>(false);
  const location = useLocation();
  const currentUrl = location.pathname;

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
            <Link
              to="/"
              className={`${styles.nav_link} ${common.button_gold} ${
                currentUrl === "/" ? common.active_btn : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="/our-services"
              className={`${styles.nav_link} ${common.button_gold} ${
                currentUrl === "/our-services" ? common.active_btn : ""
              }`}
            >
              Our Sevices
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="/about"
              className={`${styles.nav_link} ${common.button_gold} ${
                currentUrl === "/about" ? common.active_btn : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="/contact"
              className={`${styles.nav_link} ${common.button_gold} ${
                currentUrl === "/contact" ? common.active_btn : ""
              }`}
            >
              Contact
            </Link>
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
