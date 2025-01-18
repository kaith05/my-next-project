"use client";

import Link from "next/link"; // 正しいインポート文
import Image from "next/image"; // 正しいインポート文
import { useState } from "react"; // useStateをインポート
import cx from "classnames"; // 正しいインポート文
import styles from "./index.module.css"; // 正しいインポート文

export default function Menu() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return (
      <div>
        <nav className={cx(styles.nav, isOpen && styles.open)}>
          <ul className={styles.items}>
            <li>
              <Link href="/production" onClick={close}>
                制作物
              </Link>
            </li>
            <li>
              <Link href="/introduction" onClick={close}>
                自己紹介
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={close}>
                お問い合わせ
              </Link>
            </li>
          </ul>
          <button className={cx(styles.button, styles.close)} onClick={close}>
            <Image
              src="/close.svg"
              alt="閉じる"
              width={24}
              height={24}
              priority
            />
          </button>
        </nav>
        <button className={styles.button} onClick={open}>
          <Image src="/menu.svg" alt="制作物" width={24} height={24} />
        </button>
      </div>
    );
}
