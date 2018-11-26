module.exports = function(){
    //--------------- METODOS GETS ---------------
    this.getBoards = function(connection, callback){
        let sql = 'select * from boards';
        connection.query(sql, callback);
    }

    this.getBoard = function(id, connection, callback){
        let sql = 'select * from boards where ID = ' + id;
        connection.query(sql, callback);
    }

    this.loadFirstColumn = function(id, connection, callback){
        let sql = 'select * from cards where state = 1 and boardID = ' + id;
        connection.query(sql, callback);
    }

    this.loadSecondColumn = function(id, connection, callback){
        let sql = 'select * from cards where state = 2 and boardID = ' + id;
        connection.query(sql, callback);
    }

    this.loadThirdColumn = function(id, connection, callback){
        let sql = 'select * from cards where state = 3 and boardID = ' + id;
        connection.query(sql, callback);
    }
//--------------- METODOS POSTs ---------------
    this.storeCard1 = function(conteudo, connection, callback){
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