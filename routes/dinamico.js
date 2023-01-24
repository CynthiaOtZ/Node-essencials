var express = require('express');
var router = express.Router();

router.get("/", function(peticion, respuesta){
    respuesta.render('dinamico');
});

//Insertar argumento con :
router.get("/:datoURL/:ID", function(peticion, respuesta){
    //respuesta.send("Informacion dinamica " + peticion.params.datoURL + " Otro parametro: " + peticion.params.masParametros);
    respuesta.render('dinamico',{
        datos:{
            titulo:peticion.params.datoURL,
            ID: peticion.params.ID
        }
    });
});


module.exports = router;