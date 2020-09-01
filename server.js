'user strict'

var db = require('./app/models/index');
var controller = require('./app/controllers/tutorial.controller');

var run = async () => {
    var tut1 = await controller.createTutorial({
        title: "primer tutorial",
        description: "esto es una descripcion del primer tutorial"
    });

    var tut2 = await controller.createTutorial({
        title: "segundo tutorial",
        description: " 2da description"
    });
};

run();

db.sequelize.sync();