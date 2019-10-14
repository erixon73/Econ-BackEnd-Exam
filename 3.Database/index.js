const mysql = require('mysql')

const db = mysql.createConnection(
    {
        user : 'root',
        password : 'password',
        host : 'localhost',
        database : 'moviepurwadhika'
    }
)

module.exports = db