// importamosa mongoose  que sera la capa utilizada para implentar la conexion a la base de datos MongoDB
import mongoose from "mongoose";
//creamos una funcion  asincrona
//Es asincrona porque conectarse a la base de datos
//tarda cierto tiempo y puede fallar
export async function connectarDB(uri) {
  //Esperamos a que mongoose estableczca una  conexion  real con MongoDB
  const conexion = await mongoose.connect(uri);
  // Si llegamos hasta qui significa que la conexion fue exitosa
  console.log(`Se ha conectado a la base de datos ${conexion.connection.name}`);
}
