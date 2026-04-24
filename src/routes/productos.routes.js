import {Router} from 'express'

router = Router();
//get obtener productos
router.get('/productos',getProductos)

router.get('/producto/:id',getProducto)
//post poner nuevo producto
router.post('/pruducto',postProducto)
//put actualizar por completo un producto
router.put('/producto',putProducto)
//patch actualizar algo en especifico del producto
router.patch('/producto',patchProducto)
//delete borrar producto
router.delete('/producto',deleteProducto)

export default router 
