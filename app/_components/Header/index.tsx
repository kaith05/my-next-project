import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.Header}>
            <a href="/" className={styles.logolink}>
                <Image
                    src="/logo.svg"
                    alt="SIMPLE"
                    width={348}
                    height={133}
                    priority
                />
            </a>
        </header>
    );
}