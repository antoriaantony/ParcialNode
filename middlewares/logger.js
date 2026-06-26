// config del logger

module.exports = (req,res,next)=>{


    const fecha = new Date();

    console.log(
        "Fecha:",
        fecha.toLocaleDateString(),
        "Hora:",
        fecha.toLocaleTimeString(),
        "Metodo:",
        req.method,
        "Ruta:",
        req.url
    );


    next();

}