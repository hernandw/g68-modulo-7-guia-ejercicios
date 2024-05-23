import express from 'express';
import pool from '../config/stringConections.js'
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/fecha', async(req, res)=>{
const result = await pool.query('Select now()')
console.log(result.rows)
res.send(result.rows)
})

export default router