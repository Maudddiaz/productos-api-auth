import Router from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {pool} from '../db.js'
const router = Router()


//ruta para registrar un usuario
router.post('/register',async(req,res)=>{
    try{const {username,password} = req.body

    //verificar si el usuario existe
    const userExists = await pool.query('SELECT * FROM USUARIOS WHERE username =?',[username])
    if (userExists.name === username) return  res.status(400).json({msg:'el usuario ya existe'})
    
    //encriptar contrase;a 
    const  hashedPassword = await bcrypt.hash(password,10)

    //guardar  usuario en la base de datos simulada
    const newUser = await pool.query('INSERT INTO USUARIOS (username,password) VALUES (?,?)',[username,hashedPassword])
    
    res.status(201).send('usuario registrado con exito !!!')}
    catch(error){return res.send(error)}
})

router.get('/users',(req,res)=>{ res.json(users)})
export default router