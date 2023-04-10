import React from "react";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";

interface IFooter {
  logo?: string;
  links?: {
    title: string;
    url: string;
  }[];
  social?: {
    title: string;
    url: string;
  }[];
}
const socialExample = [
  {
    title: "Instagram",
    url: "example.com",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/sfer-matias/",
  },
  {
    title: "GitHub",
    url: "https://github.com/matiassf1",
  },
];
const linkExample = [
  {
    title: "JournalAPP",
    url: "https://journalredux.netlify.app/auth/login",
  },
  {
    title: "HeroesAPP",
    url: "https://herosearchh.netlify.app/marvel",
  },
  {
    title: "CitasVeteAPP",
    url: "https://vtecitas.netlify.app/",
  },
  {
    title: "CountriesBy",
    url: "https://app.netlify.com/sites/countryby",
  },
];

const Footer: React.FunctionComponent<IFooter> = ({
  logo,
  links = linkExample,
  social = socialExample,
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div>Logo</div>
        <ul className={styles.footer__links}>
          <li style={{marginBottom:'20px'}}><span style={{fontWeight:'bold'}}>Projects</span></li>

          {links.map((link, index) => (
            <li key={index} className={styles.footer__link}>
              <Link target="_blank" href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles.footer__social}>
          {social.map((socialLink, index) => (
            <li key={index} className={styles.footer__social}>
              <Link target="_blank" href={socialLink.url}>{socialLink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
