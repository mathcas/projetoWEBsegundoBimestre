module.exports.cardSalvar = function (app, req, res) {
    let card = req.body;
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;

    indexModel.storeCard(card, connection, function (error, result) {
        res.redirect('/index');
    });
}

module.exports.cardDeletar = function (app, req, res) {
    let idCard = req.body.id;
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    indexModel.deleteCard(idCard, connection, function (error, result) {
        res.redirect('/index');
    });
}


module.exports.cardListar = function (app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;

    indexModel.getCards(connection, function (error, result) {
        if (error) { console.log("Erro"); console.log(error) }
        console.log(result);
        res.render('index/index', { cards: result });
    });
}