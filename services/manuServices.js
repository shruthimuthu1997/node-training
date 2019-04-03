const client = require('../db')

exports.getManu = async () => {
    const result = await client.query('select * from manufacture')
    return result.rows;
}
exports.getManuById = async (id) => {
    const result = await client.query(`select * from manufacture where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (manufacture) => {
    try {
        const query = 'insert into manufacture(name,company,city,state,country,pincode) values($1,$2,$3,$4,$5,$6)'
        const values = [manufacture.name, manufacture.company, manufacture.city, manufacture.state, manufacture.country, manufacture.pincode]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw " Unable to insert product"
    }
}