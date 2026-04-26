import {pool} from '../db.js'
import Router from 'express'

const router = Router()

router.get('/ping',async (req,res) =>{
try{
    //throw error
    const result = await pool.query('SELECT 1+1 AS result')
    res.json(result[0])
}
catch(error){
    res.status(500).json({msg:'no conecta con la bdd'})

}})



export default router