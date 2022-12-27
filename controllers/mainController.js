const express = require('express');
const path = require("path");

const fs = require('fs');

/* REQUIERO ARCHIVO JSON Y PARSE PARA LEERLO*/
let listaProductos = require('../database/listaProductos.json');

const controlador = {
    index: (req, res) => {
        res.render("index", {productos : listaProductos});
    },

    detalleMenu: (req, res) => {
        const { id }  =  req.params; 

        productos = listaProductos.filter((prop) => prop.id == id)

       if (productos.length) return res.render("detalleMenu", {productos : productos});
       res.send("Not Found");
       
    },
   
};


module.exports = controlador;   