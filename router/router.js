import express from 'express';

import { home, fecha, addUser, getUsers, getUsersById } from '../controller/controller.js'
const router = express.Router();

router.get('/',  home)


router.get('/fecha', fecha)

router.post('/register', addUser)

router.get('/users', getUsers)

router.get('/user/:id', getUsersById)

export default router