import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import Head from "next/head";
const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Contact", path: "/contacts" },
  { id: 3, title: "Home", path: "/posts" },
];
const Navbar = () => {
  const { pathname } = useRouter();

  console.log(pathname);
  return (
   <>

    <nav className={styles.nav}>
      <div className={styles.logo}> Next js</div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}> {title}</a>
          </Link>
        ))}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
