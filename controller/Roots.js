'use strict'

class Roots {



datos(req, res) {
        res.render('datos', {
            title: 'Datos'
            //error: req.flash("err_cred")
        });
    }
main(req, res) {
        res.render('main', {
            title: "Estadisticas ",
            sesion: true
            //error: req.flash("err_cred")
        });
    }



}

module.exports = Roots;