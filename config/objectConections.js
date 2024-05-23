import pg from 'pg'
import 'dotenv/config'
const { Pool} = pg

const { DB_PASSWORD, DB_USER, DB_DATABASE, DB_HOST } = process.env;


const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    allowExitOnIdle: true
}

const pool = new Pool(config)

export default pool