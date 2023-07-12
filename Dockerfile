FROM node:18 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# 本番ステージ：開発ステージでビルドした成果物をコピーし、本番用の依存関係をインストールします。
FROM node:18-alpine AS production

# ビルド時
ARG NODE_ENV=production
# 実行時
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["npm", "run", "start:prod"]
