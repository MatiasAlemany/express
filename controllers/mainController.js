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
        res.render("detalleMenu", {productos : listaProductos});
    },
};


module.exports = controlador;   