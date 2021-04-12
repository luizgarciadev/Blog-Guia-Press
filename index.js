const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine","ejs"); //view engine render HTML






app.get("/", (req,res) => { //rota principal
    res.render("index");
})

app.listen(8080, () => {
    console.log("Servidor rodando!");
})