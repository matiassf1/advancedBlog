import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__item}>
          <Link href="/" className={styles.nav__link}>
            Home
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/createblog" className={styles.nav__link}>
            Create Blog
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/about" className={styles.nav__link}>
            About Us
          </Link>
          <div className={styles.nav__dropdown}>
            <ul className={styles.nav__submenu}>
              <li>
                <Link className={styles.nav__link} href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={styles.nav__link} href="/team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className={styles.nav__link} href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <h3 style={{marginRight:'40px'}}> Sfer Blog</h3>

    </nav>
  );
}
