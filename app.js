const express = require('express');
const app = express();

const path = require("path");
app.use(express.static('public')) 

/* LINEA PARA EJECUTAR EJS */
app.set("view engine", "ejs")

/* SERVIDOR */
app.listen(3000, () =>{
    console.log('http://localhost:3000')
});

/* RUTAS INDEX */
let rutaMain = require("./routers/rutaIndex");
app.use("/", rutaMain);

/* RUTA DETALLE MENU */
let detalleMenu = require("./routers/rutaDetalleMenu.js");
app.use("/detalleMenu.ejs", detalleMenu);

/* /* RUTA DETALLE PRODUCTO 
let detalleProducto = require('./routers/rutaProducto.js')
app.use('/detalle/:id', detalleProducto) */

