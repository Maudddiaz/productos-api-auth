import express from 'express'
import morgan from 'morgan'
import {PORT} from './config.js'
import  productos  from './routes/productos.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import pruebadb from './routes/ping.js'
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())


//
app.use('/api',productos)
app.use('/pruebas',pruebadb)



app.listen(PORT, ()=> console.log(`escuchando desde EL PUERTO : ${PORT}`))