var async = require('async');

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
        'third_column': third_column,
        'userID': req.cookies.userID
    };

    indexModel.storeBoard(values, connection, function (error, result) {
        res.redirect('/perfil');
    });
}

module.exports.storeCard1 = function (app, req, res) {
    
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    let card = req.body;

    //TITULO DO CARD
    let title = card.title1;
    //DESCRICAO DO CARD
    let description = card.content1;

    var values = {
        'title': title,
        'description': description,
        'boardID': req.cookies.boardID,
        'userID': req.cookies.userID,
        'state': 1
    };

    indexModel.storeCard1(values, connection, function (error, result) {
        res.redirect('/index?ID='+req.cookies.boardID);
    });
}

module.exports.storeCard2 = function (app, req, res) {
    
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    let card = req.body;

    //TITULO DO CARD
    let title = card.title2;
    //DESCRICAO DO CARD
    let description = card.content2;

    var values = {
        'title': title,
        'description': description,
        'boardID': req.cookies.boardID,
        'userID': req.cookies.userID,
        'state': 2
    };

    indexModel.storeCard2(values, connection, function (error, result) {
        res.redirect('/index?ID='+req.cookies.boardID);
    });
}

module.exports.storeCard3 = function (app, req, res) {
    
    let connection = app.config.dbConnection();
    let indexModel = app.app.models.indexModel;
    let card = req.body;

    //TITULO DO CARD
    let title = card.title3;
    //DESCRICAO DO CARD
    let description = card.content3;

    var values = {
        'title': title,
        'description': description,
        'boardID': req.cookies.boardID,
        'userID': req.cookies.userID,
        'state': 3
    };

    indexModel.storeCard3(values, connection, function (error, result) {
        res.redirect('/index?ID='+req.cookies.boardID);
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
    res.cookie('boardID', id);

    var IDs = {
        'userID': req.cookies.userID,
        'boardID': id
    };

    console.log("------------------------ COOKIE ---------");
    console.log(IDs.boardID); 
    console.log("------------------------");

    var stack = [];

    var loadBoardList = function(callback) {
        indexModel.getBoards(IDs.userID, connection, callback);
    }

    var loadFirstColumn = function(callback) {
        indexModel.loadFirstColumn(IDs, connection, callback);
    }

    var loadSecondColumn = function(callback) {
        indexModel.loadSecondColumn(IDs, connection, callback);
    }

    var loadThirdColumn = function(callback) {
        indexModel.loadThirdColumn(IDs, connection, callback);
    }

    var loadBoard = function(callback) {
        indexModel.getBoard(IDs, connection, callback);
    }
    
    stack.push(loadBoardList);
    stack.push(loadFirstColumn);
    stack.push(loadSecondColumn);
    stack.push(loadThirdColumn);
    stack.push(loadBoard);

    async.parallel(stack, function(error, result) {

        if (error) { console.log("Erro"); console.log(error) }

        console.log("---------------------------");
        console.log(result[4]);
        console.log("---------------------------");

        res.render('index/index', {boards: result[0], column1: result[1], column2: result[2], column3: result[3], board1: result[4]});
      });
}






