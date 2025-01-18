import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_components";
import NewsList from "@/app/_components/ProductionList";
import ButtonLink from "@/app/_components/ButtonLink";

import React from "react";
import Head from "next/head";

// Appコンポーネントのエクスポートを通常のエクスポートに変更
export const App: React.FC = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/js/particles.js"></script>
      </Head>

      {/* 煙のエフェクトのみ */}
      <div id="particles-js"></div>
    </div>
  );
};

// Home関数は`default`エクスポートを使い続ける
export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <div></div>
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
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
