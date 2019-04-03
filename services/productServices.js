const client = require('../db')

exports.getProducts = async () => {
    const result = await client.query('select * from products')
    return result.rows;
}
exports.getProductsById = async (id) => {
    const result = await client.query(`select * from products where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (userID, manufactureID, product) => {
    try {
        const query = 'insert into products(name,code,price,description,quantity,createdat,createdby,manufacture_id) values($1,$2,$3,$4,$5,$6,$7,$8)'
        const values = [product.name, product.code, product.price, product.description, product.quantity, new Date(), userID, manufactureID]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw " Unable to insert product"
    }
}

// exports.getProducts = () => {
//     return [
//         {
//             "name": "lava",
//             "price": "7890",
//             "manufacture": "china",
//             "owner": "me"
//         },
//         {
//             "name": "samsung",
//             "price": "8900",
//             "manufacture": "japan",
//             "owner": "me"
//         }

//     ]
// }