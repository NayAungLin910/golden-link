import { FC, useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { isWhiteSpaceLike } from "typescript";

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
    <nav className={styles.nav}>
      <a href="#" className={styles.brand}>
        HOME
      </a>
      <ul className={nav}>
        <li className={styles.nav_item}>
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#" className="nav-link">
            Sevices
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#" className="nav-link">
            About
          </a>
        </li>
      </ul>
      <div className={styles.nav_toggler}>
        {active ? (
          <IoMdClose
            onClick={navToggle}
            className={styles.nav_icon}
          />
        ) : (
          <FaBars
            onClick={navToggle}
            className={styles.nav_icon}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
