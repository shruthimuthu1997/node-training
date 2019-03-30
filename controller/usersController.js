const router = require('express').Router();
const usersService = require('../services/usersService')


router.get('/', (req, res) => {
    const users = usersService.getUsers()
    res.header("Access-Control-Allow-Origin", "*")
    res.json({ sruthi: users })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`user id is ${id}`);
    res.json({ message: 'user id is defined' })
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "In users Post" })
})
module.exports = router