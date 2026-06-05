# my-next-project

学校の授業で制作した、microCMSと連携するNext.js（TypeScript / App Router）のWebアプリケーションです。

## ⚠️ 動作に関する注意点
現在、セキュリティおよび運用の都合上、microCMSの実際のAPIキーおよびサービスドメインは非公開にしています。
ローカル環境（`npm run dev`）で起動した際は、API通信部分で `404 (Not Found)` エラーが発生しますが、これは想定された挙動です。

本リポジトリでは、以下の実装内容を中心にご覧いただけますと幸いです。
- Next.js (App Router) を用いたコンポーネント設計
- TypeScriptによる型安全な開発
- microCMS SDKを用いたデータ取得の設計（`app/_libs/microcms.ts` 付近）