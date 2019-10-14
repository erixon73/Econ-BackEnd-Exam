const db = require('../3.Database/index')

module.exports = {
    getMovCat : (req, res) => {
        db.query(`select m.nama as movie, c.nama as category from movcat mc join movies m on m.id = mc.idmovie join categories c on c.id = mc.idcategory`, (err, result) => {
            try {
                if(err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addMovCat : (req, res) => {
        let sql = `insert into movcat values ((select id from movies where nama = '${req.body.namaMovie}'), (select id from categories where nama = '${req.body.kategoriMovie}'))`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Menambah Koneksi`)
            } catch (err) {
                console.log(err)
            }
        })
    },

    deleteMovCat : (req, res) => {
        let sql = `delete from movcat where idmovie = ${req.query.idmovie} and idcategory = ${req.query.idcategory}`
        db.query(sql, (err, result) => {
            try {
                if(err) throw err
                res.send(`Berhasil Menghapus Koneksi`)
            } catch (err) {
                console.log(err)
            }
        })
    }
}