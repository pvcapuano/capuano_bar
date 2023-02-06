import Link from "next/link";
import styles from "./styles.module.scss";
import { useContext } from "react";

import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const { signOut } = useContext(AuthContext);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard" className={styles.menuItems}>
          Capuano Bar
        </Link>

        <nav className={styles.menuNav}>
          <Link className={styles.menuItems} href="/category">
            Categoria
          </Link>

          <Link className={styles.menuItems} href="/product">
            Cardapio
          </Link>

          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
