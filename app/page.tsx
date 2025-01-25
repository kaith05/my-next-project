import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_components";
import NewsList from "@/app/_components/ProductionList";
import ButtonLink from "@/app/_components/ButtonLink";

import React from "react";

// Home関数は`default`エクスポートを使い続ける
export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <Image
          className={styles.bgimg}
          src="/HP画像.png"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>制作物</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/production">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
