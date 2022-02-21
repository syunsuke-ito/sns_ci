ses_teams
# ses_team


手順
git clone git@github.com:syunsuke-ito/ses_team



docker compose up -d --build



docker compose exec app bash

composer install

cp .env.example .env


php artisan key:generate


php artisan storage:link


chmod -R 777 storage bootstrap/cache


npm install -D vue@2# laravel_spa
