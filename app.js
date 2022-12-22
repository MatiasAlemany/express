const { Router } = require('express');
const express = require('express');
const app = express();

const path = require("path");
app.use(express.static('public'))

app.listen(3000, () =>{
    console.log('http://localhost:3000')
});


let rutaMain = require("./routers/main");
app.use("/", rutaMain);