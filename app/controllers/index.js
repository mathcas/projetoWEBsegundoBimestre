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

module.exports.storeBoard = function (app, req, res) {
    
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
        res.redirect('/perfil');
    });
}

module.exports.storeCard1 = function (app, req, res) {
    
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    let card = req.body;
    var query = require('url').parse(req.url,true).query;
    let id = query.ID;

    //TITULO DO CARD
    let title = card.title1;
    //DESCRICAO DO CARD
    let description = card.content1;

    var values = {
        'title': title,
        'description': description,
        'boardID': id,
        'state': 1
    };

    indexModel.storeCard1(values, connection, function (error, result) {
        res.redirect('/perfil');
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

module.exports.boardListar = function (app, req, res) {
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    var query = require('url').parse(req.url,true).query;
    let id = query.ID;

    var stack = [];

    var loadBoardList = function(callback) {
        indexModel.getBoards(connection, callback);
    }

    var loadFirstColumn = function(callback) {
        indexModel.loadFirstColumn(id, connection, callback);
    }

    var loadSecondColumn = function(callback) {
        indexModel.loadSecondColumn(id, connection, callback);
    }

    var loadThirdColumn = function(callback) {
        indexModel.loadThirdColumn(id, connection, callback);
    }

    var loadBoard = function(callback) {
        indexModel.getBoard(id, connection, callback);
    }


    stack.push(loadBoardList);
    stack.push(loadFirstColumn);
    stack.push(loadSecondColumn);
    stack.push(loadThirdColumn);
    stack.push(loadBoard);

    async.parallel(stack, function(error, result) {

        if (error) { console.log("Erro"); console.log(error) }
        console.log("----------------------------");
        console.log(result[0]);
        console.log("----------------------------");

        res.render('index/index', {boards: result[0], column1: result[1], column2: result[2], column3: result[3], board: result[4]});
      });
}






