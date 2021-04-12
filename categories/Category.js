//model category
const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Criar tabela de relacionamento no BD
//Category.sync({force: true});

module.exports = Category;
