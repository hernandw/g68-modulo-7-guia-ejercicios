import express from 'express';

import { home, fecha, addUser } from '../controller/controller.js'
const router = express.Router();

router.get('/',  home)


router.get('/fecha', fecha)

router.post('/register', addUser)

export default router