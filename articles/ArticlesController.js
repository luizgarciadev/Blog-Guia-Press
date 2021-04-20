const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");

//Rota para exibir artigos
router.get("/admin/articles", (req,res) => {
    res.send("Rota de Articles");
});

//Rota criar novo artigo
router.get("/admin/articles/new", (req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new",({categories: categories}));
    })
});

//Rota para salvar artivo (formulário) no banco de dados
router.post("/articles/save", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category //Chave estrangeira da categoria
    }).then(() => {
        res.redirect("/admin/articles");
    })
});

module.exports = router;