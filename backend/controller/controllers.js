import mongoose from 'mongoose'
import product from '../schemas/productSchema.js'


export const AddProduct = async (req, res) => {
    try {
        const { name, price, description, category, images} = req.body

        if(!name || !price || !description || !category || !images) {
            res.status(400).json('You need to enter all fields')
            throw new Error('You need to enter all fields')
        }

        const Product = await product.create({name, price, description, category, images})
        res.status(201).json(Product)
        console.log('Product created')
    } catch (err) {
        res.status(400).json('Process failed')
        console.log('Process failed', err)
    }
} 

export const GetProducts = async (req, res) => {
    try {
        const Product = await product.find()
        if(!Product) {
            res.status(404).json('No products found')
            console.log('No products found')
        }
        res.json(Product)
        console.log('Products fetched')
    } catch (err) {
        res.status(400).json('Process failed')
        console.log('Process failed', err)
    }
}

export const GetOneProduct = async (req, res) => {

    try {
        const productId = req.params.id
        const Product = await product.findById(productId)
        if(!Product) {
            res.status(404).json('No product found')
            console.log('No product found')
        }
        res.json(Product)
        console.log('Product fetched')
    } catch (err) {
        res.status(400).json('Process failed')
        console.log('Process failed', err)
    }
}

export const DeleteProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const Product = await product.findByIdAndDelete(productId)
        if(!Product) {
            res.status(404).json('No product found')
            console.log('No product found')
        }
        res.json(Product)
        console.log('Product deleted')
    } catch (err) {
        res.status(400).json('Process failed')
        console.log('Process failed', err)
    }
}

export const UpdateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const { name, price, description, category, images} = req.body
        const Product = await product.findByIdAndUpdate(productId, {name, price, description, category, images})
        if(!Product) {
            res.status(404).json('No product found')
            console.log('No product found')
        }
        res.status(200).json(Product)
        console.log('Product updated')
    } catch (err) {
        res.status(400).json('Process failed')
        console.log('Process failed', err)
    }
}