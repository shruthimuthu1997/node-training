const app = require('express')();
const bodyParser = require('body-parser')
const productsController = require('./controller/productsController')
const logisticsController = require('./controller/logisticsController')
const usersController = require('./controller/usersController')
const authcontroller = require('./controller/authController')

app.use(bodyParser.json())




app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})

app.use('/users/', usersController)

app.use('/auth/', authcontroller)


app.use('/products/', productsController)


app.get('/dashboard', (req, res) => {

    res.json({ message: 'hello dashboard' })
})

app.use('/logistics/', logisticsController)


module.exports = app