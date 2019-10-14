const db = require('../3.Database/index')

module.exports = {
    getCategory : (req, res) => {
        db.query(`select * from category`, (err, result) => {
            try {
                if(err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addMovie : (req, res) => {
        let sql = `insert into movies value (0, '${req.body.namaMovie}', '${req.body.tahunMovie}', '${req.body.deskripsiMovie}')`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Input Data Movie`)
            } catch (err) {
                console.log(err)
            }
        })
    },

    deleteMovie : (req, res) => {
        let sql = `delete from movies where id = ${req.query.id}`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Menghapus Movie`)
            } catch (err) {
                console.log(err)
            }
        })
    },

    editMovie : (req, res) => {
        let sql = `update movies set nama = '${req.body.namaMovie}', tahun = ${req.body.tahunMovie}, description = '${req.body.deskripsiMovie}' where id = ${req.query.id}`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Edit Data Movie`)
            } catch (err) {
                console.log(err)
            }
        })
    }
}