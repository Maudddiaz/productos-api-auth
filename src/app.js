import express from 'express'
import morgan from 'morgan'
import {PORT} from './config.js'
import {productos} from './routes/productos.routes.js'
import cors from 'cors'
const app = express()

//middlewares
app.use(morgan('dev'))



//
app.use('/api',productos)




app.listen(PORT, ()=> console.log(`escuchando desde EL PUERTO : ${PORT}`))