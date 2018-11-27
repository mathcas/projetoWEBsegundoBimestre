module.exports = function(){
    //--------------- METODOS GETS ---------------
    this.getBoards = function(userID, connection, callback){

        let sql = 'select * from boards where userID = ' + userID;
        connection.query(sql, callback);
    }

    this.getBoard = function(IDs, connection, callback){
        let sql = 'select * from boards where ID = ' + IDs.boardID + ' and userID = ' + IDs.userID;
        connection.query(sql, callback);
    }

    this.loadFirstColumn = function(IDs, connection, callback){
        let sql = 'select * from cards where state = 1 and boardID = ' + IDs.boardID + ' and userID = ' + IDs.userID;
        connection.query(sql, callback);
    }

    this.loadSecondColumn = function(IDs, connection, callback){
        let sql = 'select * from cards where state = 2 and boardID = ' + IDs.boardID + ' and userID = ' + IDs.userID;
        connection.query(sql, callback);
    }

    this.loadThirdColumn = function(IDs, connection, callback){
        let sql = 'select * from cards where state = 3 and boardID = ' + IDs.boardID + ' and userID = ' + IDs.userID;
        connection.query(sql, callback);
    }
//--------------- METODOS POSTs ---------------
    this.storeCard1 = function(conteudo, connection, callback){
        connection.query('insert into cards set ?',conteudo, callback);
    }

    this.storeCard2 = function(conteudo, connection, callback){
        connection.query('insert into cards set ?',conteudo, callback);
    }

    this.storeCard3 = function(conteudo, connection, callback){
        connection.query('insert into cards set ?',conteudo, callback);
    }

    this.storeBoard = function(conteudo, connection, callback){
        connection.query('insert into boards set ?',conteudo, callback);
    }

    this.deleteCard = function(id, connection, callback){
        let sql = "delete from cards where ID = " + id;
        connection.query(sql, callback);
    }

    return this;
}