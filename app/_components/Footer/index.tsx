import Link from "next/link";
import styles from "./index.module.css";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/news">制作物一覧</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/menbers">????</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">????</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>© SIMPLE.ALL Rights Reserves 2024</p>
        </footer>
    );
}