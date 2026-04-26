import {pool} from '../db.js'
export const getProductos = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM  productos')
        res.send(rows)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}

export const getProducto = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM  productos where id = ?',[parseInt(req.params.id)])
        res.send(rows)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}


export const postProducto = async (req,res,next) =>{
    try{
        const {name,cantidad,precio} = req.body
        const [result] = await pool.query('INSERT INTO productos (name,cantidad,precio) values(?,?,?)',[name,cantidad,precio])
        res.send({
            id:result.id,
            name,
            cantidad,
            precio
        })
    }
    catch(error){
        console.error('el error es',error)
        
    }
}


export const putProducto = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM  productos')
        res.send(rows)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}
export const patchProducto = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM  productos')
        res.send(rows)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}

export const deleteProducto = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM  productos')
        res.send(rows)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}