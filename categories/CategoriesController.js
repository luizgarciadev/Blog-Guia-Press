const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

//Rota criar categoria
router.get("/admin/categories/new", (req,res) => {
    res.render("admin/categories/new");
});


//funcção POST salvar categorias
router.post("/categories/save", (req,res) => {
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/admin/categories");
        });
    }else{
        res.redirect("/admin/categories/new");
    };
});


//model recebendo categories do BD
router.get("/admin/categories", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories});
    })
});


//rota deletar categoria + função deletar categoria
router.post("/categories/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){//se não for indefinido
        if(!isNaN(id)){//se não for numero
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            }); 
        }else{//não for um numero
            res.redirect("/admin/categories");
        };
    }else{//não for indefinido
        res.redirect("/admin/categories");
    };
});


//Rota e Função editar categoria
router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.redirect("/admin/categories");
    }
    Category.findByPk(id).then(category => {
        if(category != undefined){
            res.render("admin/categories/edit", {category: category});
        }else{
            res.redirect("admin/categories");
        }
    }).catch(erro => {
        res.redirect("admin/categories");
    })
});


//Função que da update na categoria no DB
router.post("/categories/update", (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    Category.update({title: title, slug: slugify(title)},{
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/categories");
    })
});

module.exports = router;