module.exports.deleteCard = function (id, app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.cardModel;
    
    perfilModel.deleteBoard(id, connection, function (error, result) {
        res.redirect('/perfil');
    });
}

module.exports.cardListar = function (id, app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.cardModel;

    indexModel.getCard(id, connection, function (error, result) {

        if (error) { console.log("Erro"); console.log(error) }
        res.render('card/card', {card: result});
    });
}
