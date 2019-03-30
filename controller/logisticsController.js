const router = require('express').Router();

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    // console.log(`logistics`)
    res.json({ message: 'hello logistics' })
})

router.get('/:id', (req, res) => {

    console.log(`logistics id is ${req.params.id}`);
    res.json({ message: 'logistics id is defined' })
})

router.get('/logistics/:id/products', (req, res) => {

    console.log(`logistics & products id is ${req.params.id}`);
    res.json({ message: 'logistics  & product id is defined' })
})

module.exports = router