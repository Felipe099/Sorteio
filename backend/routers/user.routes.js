const users = require('../controllers/user.controller.js');
var router = require('express').Router();

module.exports = (app) => {
    router.post('/create', users.create);
    router.get('/list', users.findAll);
    router.get("/published", users.findAllPublished);
    router.get("/:id", users.findOne);
    router.put("/:id", users.update);
    router.delete("/:id", users.delete);
    router.delete("/", users.deleteAll);

    app.use('/users', router);
};
