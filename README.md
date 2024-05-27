<div id="top"></div>

## 使用技術一覧

<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A.svg?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
</p>

## 目次

1. [リポジトリについて](#リポジトリについて)
2. [環境](#環境)
3. [概要](#概要)
4. [ディレクトリ構成](#ディレクトリ構成)

<!-- リポジトリについて -->

## リポジトリについて

Next.js Approuter版のテンプレート

## 環境

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| React                | ^18        |
| Next.js              | 14.2.3     |
| tailwindcss          | ^3.4.1     |

その他のパッケージのバージョンはpackage.jsonを参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## 概要

### - 環境立ち上げ

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### - 動作確認

http://localhost:3000 にアクセスできるか確認

### - husky

<strong>
  npm install時などにhuskyが初期化され、commit時にlintとformat、push時にtype checkが走ります。
</strong>
<br/>

### - UIライブラリ

UIライブラリとしてヘッドレスUIのRadixUIベースのshadcn/uiを採用しています。<br/>
RadixUIとTailwindで作られており、カスタマイズもしやすいためプロジェクトのフロント開発速度が上昇します。<br/>
<br/>
[ドキュメント](https://ui.shadcn.com/docs/components/accordion)

```bash
// 最後のコンポーネント名を変えることで任意のコンポーネントをインストールできます。
npx shadcn-ui@latest add button
```

<p>
tailwind.config.tsファイル内に定義されているCSS変数はダークモードなど実装する際に有用なので、必要に応じで使用してください。<br/>
必要ない場合は変数を使わなくても大丈夫ですが、shadcn/uiで変数を使用してスタイリングされているので、変数に入れている色を変えていくカスタイズの方が使いやすいかもしれません（適宜）。<br/>
</p>

## ディレクトリ構成

featureベースのディレクトリ構成です。<br/>

- uiディレクトリにはUIコンポーネント
- serviciesディレクトリにはサーバーアクションなどのロジック切り出し
- hooksディレクトリにはクライアント側のロジック切り出し
- 上記を組み合わせた「機能」としてfeaturesディレクトリ
- app配下はルーティング
  といったイメージです。

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

❯ tree -a -I "node_modules|.next|.git|.pytest_cache|static" -L 3

```
.
├── .eslintrc.json
├── .gitignore
├── .husky
│   ├── pre-commit
│   └── pre-push
├── .lintstagedrc.js
├── .prettierrc
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── README.md
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── (authenticated)
│   │   ├── (site)
│   │   ├── favicon.ico
│   │   ├── globals.scss
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   ├── constants.ts
│   ├── features
│   │   ├── faq
│   │   ├── post
│   │   └── search
│   ├── hooks
│   │   └── useLockBodyScroll.ts
│   ├── lib
│   │   └── utils.ts
│   ├── services
│   │   ├── post
│   │   └── search
│   ├── types
│   │   └── commontypes.ts
│   └── ui
│   ├── accordion
│   ├── accordion.tsx
│   ├── button.tsx
│   ├── flex
│   ├── footer
│   ├── header
│   ├── heading
│   ├── loading
│   ├── not-found
│   └── slider
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

<p align="right">(<a href="#top">トップへ</a>)</p>
