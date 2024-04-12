import express from 'express'
const router = express.Router()
import { AddProduct, GetProducts, GetOneProduct, UpdateProduct, DeleteProduct } from '../controller/controllers.js'

router.get('/', GetProducts)
router.get('/:id', GetOneProduct)
router.post('/', AddProduct)
router.put('/:id', UpdateProduct)
router.delete('/:id', DeleteProduct)

export default router