# 使い方

### https://fibonacci-6kvczdmylq-uc.a.run.app/

下のメッセージを返す

```
Please enter into /fib?n={number}
```

#### https://fibonacci-6kvczdmylq-uc.a.run.app/fib?n={number}

フィボナッチ数列の第 n 項の値を返す

# NestJS の HTTP framework には Express と Fastify のどちらを使用すべきか

## Express

### メリット

- サードパーティとドキュメントの豊富さ
- platform-express には追加でセットアップが必要なし
- Good Practice と 優れたガイドライン
- デフォルトで依存注入
- 人気ライブラリのインテグレーションが存在

### デメリット

- パフォーマンスの低さ

## Fastify

### メリット

- 高パフォーマンス

### デメリット

- ドキュメントの少なさ
- プラグインをセットアップする必要あり

## 2 つの性能比較

RPS を比較すると、 200 同時接続に対して express では 17K、Fastify では 50K RPS であることから、NestJS + Fastify のほうがパフォーマンスが 3 倍ほど高いことがわかる。
![リクエスト処理にかかった時間](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*8FcfBR8-0cvAxHP88yCFOQ.png)
![1秒ごとに処理可能なリクエスト数](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*iqCrwEHlwe2-F_jGTbmpYQ.png)
[引用サイト](https://medium.com/deno-the-complete-reference/nestjs-express-vs-fastify-comparison-for-hello-world-19875479e41d)

同様の理由で NestJS と Vanilla Fastify の比較では NestJS を選択

### その他の参考サイト

- [Fastify vs NestJS](https://stackshare.io/stackups/fastify-vs-nestjs)
- [NestJS Express vs Fastify](https://progressivecoder.com/nestjs-express-vs-fastify/)
- [Nest + Fastify vs Vanilla Fastify](https://www.reddit.com/r/node/comments/n94nbp/nest_fastify_vs_vanilla_fastify_what_are_the/)
