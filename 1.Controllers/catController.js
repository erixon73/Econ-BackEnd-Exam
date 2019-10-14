const db = require('../3.Database/index')

module.exports = {
    addCategory : (req, res) => {
        let sql = `insert into categories value (0, '${req.body.kategoriMovie}')`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Memasukkan Kategori Movie`)
            } catch (err) {
                console.log(err)
            }
        })
    },

    deleteCategory : (req, res) => {
        let sql = `delete from categories where id = ${req.query.id}`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Menghapus Kategori`)
            } catch (err) {
                console.log(err)
            }
        })
    },

    editCategory : (req, res) => {
        let sql = `update categories set nama = '${req.body.kategoriMovie}' where id = ${req.query.id}`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Edit Kategori Movie`)
            } catch (err) {
                console.log(err)
            }
        })
    }
}