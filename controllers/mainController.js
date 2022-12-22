const express = require('express');

const controlador = {
    home: (req, res) => {
        res.send('FUNCIONA');
    },
};


module.exports = controlador;