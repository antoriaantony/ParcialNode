const conexion = require("../database/conexion");



// obtener los productos desde la base de datos

exports.obtenerProductos = (req,res)=>{


    conexion.query(
        "SELECT * FROM productos",
        (error,resultados)=>{


            if(error){

                return res.status(500).json({
                    mensaje:"Error interno del servidor"
                });

            }


            res.json(resultados);


        }
    );

}



// obtener por id

exports.obtenerProductoPorId = (req,res)=>{


    const id = req.params.id;


    conexion.query(
        "SELECT * FROM productos WHERE id=?",
        [id],

        (error,resultado)=>{


            if(error){

                return res.status(500).json({
                    mensaje:"Error interno del servidor"
                });

            }


            if(resultado.length==0){

                return res.status(404).json({
                    mensaje:"Producto no encontrado"
                });

            }


            res.json(resultado[0]);


        }
    );


}




// crear uno nuevo

exports.crearProducto = (req,res)=>{


    const {nombre,categoria,precio,stock}=req.body;


    conexion.query(

        "INSERT INTO productos(nombre,categoria,precio,stock) VALUES (?,?,?,?)",

        [nombre,categoria,precio,stock],

        (error)=>{


            if(error){

                return res.status(500).json({
                    mensaje:"Error interno del servidor"
                });

            }


            res.json({
                mensaje:"Producto creado"
            });


        }

    );

}



// actualizar 1 producto

exports.actualizarProducto=(req,res)=>{


const id=req.params.id;

const {nombre,categoria,precio,stock}=req.body;



conexion.query(

"UPDATE productos SET nombre=?, categoria=?, precio=?, stock=? WHERE id=?",

[nombre,categoria,precio,stock,id],


(error)=>{


if(error){

return res.status(500).json({
mensaje:"Error interno del servidor"
});

}


res.json({
mensaje:"Producto actualizado"
});


}



);


}





// eliminar 1 producto


exports.eliminarProducto=(req,res)=>{


const id=req.params.id;



conexion.query(

"DELETE FROM productos WHERE id=?",

[id],

(error)=>{


if(error){

return res.status(500).json({
mensaje:"Error interno del servidor"
});

}


res.json({
mensaje:"Producto eliminado"
});


}


);


}