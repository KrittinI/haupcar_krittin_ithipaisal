.env guide

SERVER_PORT=
WEBPORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DATABASE_URL=

run docker
for server `docker compose --env-file ../.env up -d`
