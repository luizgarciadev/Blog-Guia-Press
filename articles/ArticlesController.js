const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) => {
    res.send("Rota de Articles");
});

router.get("/admin/articles/new", (req,res) => {
    res.send("Rota para criar nova Articles");
});

module.exports = router;