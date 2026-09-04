// importamos la aplicacion Express que configuramos
// en el directorio app.js
import app from "./app.js";
//Definimos el puerto en el sque escucha nuestro backend
//Un puerto es una puerta logica utilizada por una aplicacion
//para recibit conexiones de red
const PORT = 5000;
//app.listen() inicia realmente el servidor HTTP
//Este instruccion hace Node quede escuchando peticio
//en el puerto inicado
app.listen(PORT, () => {
  //Esta funcion se ejecuta cuando el servidor
  //ya consiguio abrir correctamente el puerto
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
