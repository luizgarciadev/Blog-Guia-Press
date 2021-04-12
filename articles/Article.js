//model article
const Sequelize = require("sequelize");
const Category = require("../categories/Category");
const connection = require("../database/database");

const Article = connection.define("article", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//relacionamento de article com category
Category.hasMany(Article);
Article.belongsTo(Category);

//Criar tabela de relacionamento no BD
//Article.sync({force: true});

module.exports = Article;
