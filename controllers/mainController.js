const express = require('express');
const path = require("path");

const controlador = {
    index: (req, res) => {
        res.render("index");
    },

    detalleMenu: (req, res) => {
        res.render("detalleMenu");
    },
};


module.exports = controlador;