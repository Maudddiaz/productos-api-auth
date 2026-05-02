import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import Router from 'express'
import dotenv from 'dotenv'
dotenv.config()
import {pool} from '../db.js'

const router = Router()


router.post('/login', async(req,res)=>{
    const {username,password} = req.body
    
    //buscar usuario
    const   [rows] = await pool.query('SELECT * FROM USUARIOS WHERE username =?',[username])
    if (!rows) return res.status(400).json({msg:'login incorrecto o usuario no encontrado'})
    

    //verificar contrase;a
    const username1 =rows[0]
    const validPassword = await bcrypt.compare(password,username1.password)// esto compara las dos contrase;as
    if (!validPassword) return res.status(400).json({msg:'contrase;a incorrecta'})
    
    //Generar JWT
    const token = jwt.sign({username1: username1.name}, process.env.TOKEN_SECRET)//al  ingresar
    res.header('auth-token',token).json({token})
    
})

export default router