/*import {createPool} from 'mysql2/promise'

export const pool = createPool({//se hace para cada base de datos
    host: DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
})*/

import {Sequelize} from '@sequelize/core'
import {MySqlDialect} from '@sequelize/mysql'

const sequelize = new Sequelize({
    dialect : MySqlDialect,
    database:'stock',
    user:'root',
    password:'admin',
    host:'localhost',
    port:3306,
})