import pg from "pg";
import "dotenv/config";
const { Pool } = pg;

const { DB_PASSWORD, DB_USER, DB_DATABASE, DB_HOST, DB_PORT } = process.env;

const pool = new Pool({
  connectionString: `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
});

export default pool;
