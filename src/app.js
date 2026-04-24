import express from 'express'
import morgan from 'morgan'
import {PORT} from './config.js'
const app = express()

//middlewares
app.use(morgan('dev'))

app.listen(PORT, ()=> console.log(`escuchando desde EL PUERTO : ${PORT}`))