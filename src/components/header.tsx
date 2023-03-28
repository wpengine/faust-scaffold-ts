import { gql } from "../__generated__";
import Link from "next/link";
import style from "./header.module.css";

export default function Header({ siteTitle, siteDescription, menuItems }) {
  return (
    <header className={style.header}>
      <div className="container">
        <Link href="/" className={style.brand}>
          <h2 className={style.siteTitle}>{siteTitle}</h2>
          <p className={style.siteDescription}>{siteDescription}</p>
        </Link>

        <nav className={style.nav}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.fragments = {
  generalSettingsFragment: gql(`
    fragment HeaderGeneralSettingsFragment on GeneralSettings {
      title
      description
    }
  `),
  menuItemFragment: gql(`
    fragment PrimaryMenuItemFragment on MenuItem {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `),
};
