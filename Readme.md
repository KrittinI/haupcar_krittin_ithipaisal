.env guide

SERVER_PORT=
WEBPORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DATABASE_URL=
BACKEND_URL=
API_URL=

run docker

setup database

for server 
`docker compose --env-file ../.env up -d`
npm i
npm run dev

for web
npm i
npm run dev
