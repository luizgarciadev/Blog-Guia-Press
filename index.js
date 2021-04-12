const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Controllers (routers)
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//Models (database)
const Article = require("./articles/Article");
const Category = require("./categories/Category");

//View engine render HTML
app.set("view engine","ejs"); 

//Static
app.use(express.static("public"));

//BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error);
    });


app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req,res) => { //rota principal
    res.render("index");
})

app.listen(8080, () => {
    console.log("Servidor rodando!");
})