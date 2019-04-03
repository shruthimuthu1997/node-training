const router = require('express').Router();
const usersService = require('../services/usersService')


// router.get('/', async (req, res) => {
//     const users = await usersService.getUsers()
//     res.header("Access-Control-Allow-Origin", "*")
//     res.json({ sruthi: users })
// })

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const users = await usersService.getUsersById(parseInt(id))
    res.json({ sruthi: users })
})

router.post('/', async (req, res) => {
    try {

        await usersService.insert(req.body)
        res.json({ message: " Inserted products successfully" })
    } catch (err) {
        res.status(422).json({ message: err })
    }
})
module.exports = router



