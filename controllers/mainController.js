const express = require('express');
const path = require("path");

const fs = require('fs');

/* REQUIERO ARCHIVO JSON Y PARSE PARA LEERLO*/
let listaProductos = JSON.parse(fs.readFileSync('../database/listaProductos.json', 'utf8'));

const controlador = {
    index: (req, res) => {
        res.render("index");
    },

    detalleMenu: (req, res) => {
        res.render("detalleMenu");
    },
};

console.log(listaProductos);

module.exports = controlador;