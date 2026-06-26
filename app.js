// las constantes para express y dotenv

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productosRoutes = require("./routes/productosRoutes");
const logger = require("./middlewares/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/productos", productosRoutes);


// rutas inexistentes
app.use((req, res) => {
    res.status(404).json({
        mensaje: "Ruta no encontrada"
    });
});


// error general
app.use((err, req, res, next) => {
    res.status(500).json({
        mensaje: "Error interno del servidor"
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});