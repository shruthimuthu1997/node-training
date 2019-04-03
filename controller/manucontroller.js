const router = require('express').Router();
const manuService = require('../services/manuServices')


// router.get('/', async (req, res) => {
//     const manu = await manuService.getManu()
//     res.header("Access-Control-Allow-Origin", "*")
//     res.json({ sruthi: manu })
// })

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const manu = await manuService.getManuById(parseInt(id))
    res.json({ sruthi: manu })
})

// router.post('/', (req, res) => {
//     const { id } = req.params
//     console.log(JSON.stringify(req.body, undefined, 4));
//     res.json({ message: 'user id is defined' })
// })
module.exports = router

router.post('/', async (req, res) => {
    try {
        await manuService.insert(req.body)
        res.json({ message: " Inserted manufacture successfully" })
    } catch (err) {
        res.status(422).json({ message: err })
    }
})


