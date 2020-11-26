module.exports = app => {
    const Books = require("../controllers/book.js");
  
    var router = require("express").Router();
  
    router.post("/", Books.create);
  
    router.get("/", Books.findAll);
  
    router.get("/:id", Books.findOne);
  
    app.use('/api/books', router);
  };
  