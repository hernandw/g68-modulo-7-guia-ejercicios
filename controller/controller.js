/* import pool from '../config/stringConections.js' */
import pool from '../config/objectConections.js'
import { addUserQuery, getUsersQuery, getUsersQueryById } from '../model/queries.js'

const home = (req, res)=>{
    res.send('Hello World desde controller')
}

const fecha = async(req, res)=>{
    const result = await pool.query('Select now()')
    res.send(result.rows)
}

const addUser = async(req, res)=>{
    const {name, phone} = req.body
    const result = await addUserQuery(name, phone)
    res.send(result)
}

const getUsers = async(req, res)=>{
    const result = await getUsersQuery()
    res.send(result)
}


const getUsersById = async(req, res)=>{
    const {id} = req.params
    console.log(id)
    const result = await getUsersQueryById(id)
    res.send(result)
}

export {
    home,
    fecha,
    addUser,
    getUsers,
    getUsersById
}