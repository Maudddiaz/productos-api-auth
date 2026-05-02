import {Router} from 'express'
import {getProductos,getProducto,postProducto,putProducto,patchProducto,deleteProducto} from '../controllers/productos.controller.js'
const router = Router();
//get obtener productos
router.get('/productos',getProductos)

router.get('/producto/:name',getProducto)

//post poner nuevo producto
router.post('/producto',postProducto)

//put actualizar por completo un producto
router.put('/producto',putProducto)

//patch actualizar algo en especifico del producto
router.patch('/producto',patchProducto)

//delete borrar producto
router.delete('/producto',deleteProducto)

export default router 
