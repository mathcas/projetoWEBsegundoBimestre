
module.exports.deleteBoard = function (id, app, req, res) {
    let connection = app.config.dbConnection();
    let perfilModel = app.app.models.perfilModel;
    
    perfilModel.deleteBoard(id, connection, function (error, result) {
        res.redirect('/perfil');
    });
}


module.exports.boardListar = function (app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;

    indexModel.getBoards(connection, function (error, result) {

        if (error) { console.log("Erro"); console.log(error) }

        res.render('perfil/perfil', {boards: result});
      });
}






