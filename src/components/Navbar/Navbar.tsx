import { FC } from "react";
import styles from "./Navbar.module.css";

export interface NavbarPropsInterface {}

const Navbar: FC<NavbarPropsInterface> = () => {
  return (
    <nav className={styles.nav}>
      <a href="#" className="brand">
        HOME
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Sevices
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
      </ul>
      <div className="nav-toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
