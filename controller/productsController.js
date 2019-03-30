const router = require('express').Router();
const productServices = require('../services/productServices')

router.get('/', (req, res) => {
    const products = productServices.getProducts()
    res.json({ product: products })
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "In Products Post" })
})

router.get('/:id', (req, res) => {
    console.log(`products ${req.params.id}`)
    res.json({ message: "IN Products Single" })
})

module.exports = router