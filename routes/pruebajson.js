var express = require('express');
var router = express.Router();
//var libro = require('../Json/libros.json');
var fs = require('fs');

router.get("/", function(peticion, respuesta){
    
    //Importar JSON de forma estatica, no es recomendable
    //console.log(libro);

    //Leer un archivo Json
    fs.readFile('./public/json/libros.json', (error,datos)=>{
        if (error) {
            console.log("Error en leer el archivo");
            throw error;
        } else {
            respuesta.render('index', { datos: JSON.parse(datos)})
            //console.log({datos: JSON.parse(datos)});
        }

    })
});



module.exports = router;