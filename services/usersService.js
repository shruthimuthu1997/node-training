const client = require('../db')

exports.getUsers = async () => {
    const result = await client.query('select * from users_datas')
    return result.rows;
}
exports.getUsersById = async (id) => {
    const result = await client.query(`select * from users_datas where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (user) => {
    try {
        const query = 'insert into users_datas(username,email,mobile,designation,firstname,lastname) values($1,$2,$3,$4,$5,$6)'
        const values = [user.username, user.email, user.mobile, user.designation, user.firstname, user.lastname]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw " Unable to insert product"
    }
}


// exports.getUsers = () => {
//     return [
//         {
//             "name": "shruthi",
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