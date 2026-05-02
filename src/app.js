import express from 'express'
import morgan from 'morgan'
import {PORT} from './config.js'
import  productos  from './routes/productos.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import registrarse from './routes/registrarse.js'
import login from './routes/login.js'
dotenv.config()
import pruebadb from './routes/ping.js'


const app = express()




//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


//
app.use('/api',productos)
app.use('/pruebas',pruebadb)
app.use('/',registrarse)
app.use('/',login)


app.listen(PORT, ()=> console.log(`escuchando desde EL PUERTO : ${PORT}`))