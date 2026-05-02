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
        const [rows] = await pool.query('SELECT * FROM  productos where name = ?',[req.params.name])
        if(rows.length === 0){
            console.log(`no se encontro el producto: ${req.params.name}`)
        }
        res.send(rows)
    }
    catch(error){
        res.status(404).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
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
        const {name,cantidad,precio} = req.body
        const [rows] = await pool.query('UPDATE productos SET name = ?,cantidad = ?,precio = ? WHERE id = ?',[name,cantidad,precio])
        if (rows.affectedRows === 0){
            console.log('no se encontro el producto')
        }
        res.send(`producto actualizado nombre: ${name},${precio},${cantidad}`)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}
export const patchProducto = async (req,res) =>{
    try{
        const {name,precio} = req.body
        const [rows] = await pool.query('UPDATE productos SET precio = ? WHERE name = ?',[precio,name])
        if (rows.affectedRows === 0){
            console.log('no se encontro el producto')
        }
        res.send(`producto actualizado nombre: ${name},${precio}`)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}

export const deleteProducto = async (req,res) =>{
    try{
        const [rows] = await pool.query('DELETE FROM productos Where id = ?',[parseInt(req.body.id)])
        if(rows.affectedRows === 0){
            console.log('no se encontro el producto o ya esta eliminado jeje')
        }
        res.send('producto eliminado')
        console.log(rows)
    }
    catch(error){
        res.status(500).json({msg:'parece que no se encontro en la BD o algo salio mal nose !!!'})
    }
}