import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__logo}>
                    <Link href="/">Descubra Campinas</Link>
                </h1>
                <nav className={styles.header__nav}>
                    <Link href="/">Home</Link>
                    <Link href="/pages/destinos">Destinos</Link>
                    <Link href="/pages/contato">Contato</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;