const router = require('express').Router();
const productServices = require('../services/productServices')

router.get('/:', async (req, res) => {
    const products = await productServices.getProducts()
    res.json({ product: products })
})

router.post('/:userID/:manufactureID', async (req, res) => {
    try {
        const { userID, manufactureID } = req.params
        await productServices.insert(userID, parseInt(manufactureID), req.body)
        res.json({ message: " Inserted products successfully" })
    } catch (err) {
        res.status(422).json({ message: err })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const products = await productServices.getProductsById(parseInt(id))
    res.json({ product: products })
})

module.exports = router