// importamos express
// Express nos facilita crer un servidor web y definir rutas
import express from "express";
// creamos una instacia de la aplicacion Express
//app representara nuestro backend
const app = express();
// este middleware permite que Express interprete cuerpos JSON
app.use(express.json());

// Creamos una ruta de prueba
//GET = solicitar informacion
app.get("/api/saludo", (req, res) => {
  //res.json() = envia una respuesta en forma JSON
  res.json({
    estado: "ok",
    mensaje: "API funcionando correctamente",
  });
});

//exportamos la aplicacion para poder usarla en otros archivos
export default app;
