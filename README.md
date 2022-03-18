# ses_team

手順
dockerコンテナ立ち上げ
docker compose up -d --build

phpアプリケーション操作
docker compose exec app bash

composer install

cp .env.example .env

php artisan key:generate

php artisan storage:link

chmod -R 777 storage bootstrap/cache

webアプリケーション操作
docker compose exec web ash
npm install -D vue@2
npm run dev


vueは2系　依存関係も2系を基準に構築
認証関係はlaravel-uiを使用
UIはvuetify
