var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get("/", function(peticion, respuesta){


    //Lectura de archivos  (Forma sincronica)
    /*var contenido = fs.readFileSync('./archivos/texto.txt','utf-8'); 
    console.log(contenido);*/
    
    //Lectura de archivos (Forma asincrona)
    var contenido = fs.readFile('./archivos/texto.txt', 'utf-8', (error, datos)=>{
        if(error){
          console.log("Error de lectura");
          throw error;
      
        }
        else 
        {
          console.log(datos);
        }
        
      });
      
      
      //Leer directorio de archivos que incluye el tipo de archivo tambien
      fs.readdir('./archivos', { withFileTypes: true },(error,items)=>{
      console.log(items);
      });
      
      
      //Sobre-Escribir archivos con modulo FS (si no encuentra el archivo, lo va a crear)
      /*fs.writeFile('./archivos/texto2.txt', 'datos enviados desde node', (error)=>{
        if(error)
        {
          console.log("ERROR");
          throw error;
        }
        else 
        {
          console.log("Archivo modificado exitosamente");
        }
      }); */
      
      //Escribir texto en archivos creados
      fs.appendFile('./archivos/texto2.txt', ' Nuevos datos', (error)=>{
        if(error)
        {
          console.log("ERROR");
          throw error;
        }
        else 
        {
          console.log("Archivo modificado exitosamente");
        }
      });
      
      //Copiar archivos con la misma ruta
      /*fs.copyFile('./archivos/original.txt', 'archivos/nuevo.txt', (error)=>{
        if(error)
        {
          console.log(error);
          throw error
        }
        else
        {
          console.log("SE ha copiado exitosamente");
        }
      });*/
      
      //Eliminar archivos
      /*fs.unlink('./archivos/nuevo.txt',(error)=>{
        if(error)
        {
          console.log("Error al eliminar");
          throw error;
        }
        else 
        {
          console.log("Se elimino");
        }
      })*/


      //Copiar un archivo a otro lado y una cinfirmación hasta que termine el proceso
      /*fs.copyFile('./archivos/texto2.txt', './archivos-copia/texto2.txt', (error)=>{
        if (error) {
            console.log(error);
        } else {
          fs.writeFile('./archivos/confirmacion.txt', 'archivo copiado', (error)=>{
            console.log("Proceso finalizado");
          })
            
        }
      })*/


      //Mover un archivo de una carpeta a otra (Primero se necesita copiar y despues eliminar el archivo)
      fs.copyFile('./archivos/confirmacion.txt', './archivos-copia/confirmacion.txt', (error)=>{
        if (error) {
          console.log("Error en copiar el archivo");
          throw error;
          
        } else {
          console.log("Archivo copiado exitosamente");

          fs.unlink('./archivos/confirmacion.txt', (error)=>{
            if (error) {
              console.log("Error al eliminar el archivo");              
            } else {
              console.log("Archivo eliminado");
              console.log("Proceso termiando");
              
            }
          })
          
        }
      })





});


module.exports = router;
  