'use strict';

var Publicacion = require('../models/datos');
class DatosC {

guardar(req, res) {

		//Persona.findOne({}, (err, person)=>{
    new Publicacion({
             id: new mongoose.Types.ObjectId(),
             nombre: req.body.nombre,
             correo: req.body.correo,
             publish: req.body.publication,
             external_id: uuidv4(),
          }).save(function (err, newPublicacion) {
              if(err) {
          req.flash('error', 'No se pudo subir su publicacion!');
          res.send(err);
              }else if(newPublicacion) {
          req.flash('info', 'Publicacion subida exitosamente!');
                res.redirect('/coments');           
        }   
          });
    //});
    };

 verDatos(req, res) {
    Datos.findOne({external_id: req.params.external}, (error, publish) => {
      if(publish){
        publish.views = publish.views + 1;
        publish.save();
        Comentario.find({publish_id: req.params.external}, (error, comment) => {
          var timeago = moment(publish.timestamp).startOf('minute').fromNow();
          res.render('usuario/publicacion', {timeago, publish, comment, title: publish.title});
        });
      }else{
        res.redirect('/principal');
      }
    });
    };

}

