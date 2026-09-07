//Configuracion de dotenv para podedr leer variables de entorno
import "dotenv/config.js";
//Creamos un objeto para centralizar la configuracion
export const env = {
  port: NUMBER(process.env.PORT ?? 5000),
  //Direccion de conexion a MONGODB
  mongodb_uri: process.env.MONGO_URI ?? "mongodb://127.0.0.1/mern.inicio",
};
