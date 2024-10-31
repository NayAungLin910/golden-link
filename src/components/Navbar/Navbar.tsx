import { FC, useState } from "react";
import styles from "./Navbar.module.css";
import common from "../../styles/common.module.css"
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

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
        <a href="#">
          <img src="./golden_link_icon.jpg" className={styles.nav_img} alt="" />
        </a>
      </div>
      <div className={styles.nav}>
        <ul className={nav}>
          <li className={styles.nav_item}>
            <a href="#" className={`${styles.nav_link} ${common.button_gold}`}>
              Home
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>
              Sevices
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>
              About
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
