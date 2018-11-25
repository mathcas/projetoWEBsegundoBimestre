var async = require('async');

module.exports.cardSalvar1 = function (app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    let card = req.body;
    
    //TITULO DO CARD
    let title = card.title;
    //TITULO DO CARD
    let description = card.description;
    //TITULO DO CARD
    let boardID = 1;

    var values = {
        'title':title,
        'description':description,
        'boardID':boardID
    };

    indexModel.storeCard1(card, connection, function (error, result) {
        res.redirect('/index');
    });
}

module.exports.boardSalvar = function (app, req, res) {
    
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    let board = req.body;
    //TITULO DO BOARD
    let name = board.name;
    //TITULO DO PRIMEIRA COLUNA
    let first_column = board.first_column;
    //TITULO DO PRIMEIRA COLUNA
    let second_column = board.second_column;
    //TITULO DO PRIMEIRA COLUNA
    let third_column = board.third_column;

    var values = {
        'name': name,
        'first_column': first_column,
        'second_column': second_column,
        'third_column': third_column
    };

    indexModel.storeBoard(values, connection, function (error, result) {
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

/*
module.exports.boardListar = function (app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;

    indexModel.getBoards(connection, function (error, result) {
        if (error) { console.log("Erro"); console.log(error) }
        console.log("----------------------------");
        console.log(result);
        console.log("----------------------------");
        res.render('index/index', {conteudo: result});
    });
}
*/
module.exports.boardListar = function (app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;

    var stack = [];

    var functionOne = function(callback) {
        indexModel.getBoards(connection, callback);
    }

    stack.push(functionOne);

    async.parallel(stack, function(error, result) {

        if (error) { console.log("Erro"); console.log(error) }
        console.log("----------------------------");
        console.log(result);
        console.log(result[0]);
        console.log("----------------------------");

        res.render('index/index', {conteudo: result[0]});
      });
}






