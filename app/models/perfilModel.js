module.exports = function(){
    this.getBoards = function(connection, callback){
        let sql = 'select * from boards';
        connection.query(sql, callback);
    }

    this.loadFirstColumn = function(connection, callback){
        let sql = 'select * from cards where boardID = 1 and state = 1';
        connection.query(sql, callback);
    }

    this.loadSecondColumn = function(connection, callback){
        let sql = 'select * from cards where boardID = 1 and state = 2';
        connection.query(sql, callback);
    }

    this.loadThirdColumn = function(connection, callback){
        let sql = 'select * from cards where boardID = 1 and state = 3';
        connection.query(sql, callback);
    }
    // this.getEstudante = function(connection, id, callback){
    //     let sql = 'select * from estudantes where idestudante='+id;
    //     connection.query(sql, callback);
    // }
    this.storeCard1 = function(conteudo, connection, callback){
        connection.query('insert into cards set ?',conteudo, callback);
    }

    this.storeBoard = function(conteudo, connection, callback){
        connection.query('insert into boards set ?',conteudo, callback);
    }

    this.deleteCard = function(id, connection, callback){
        let sql = "delete from conteudoprogramatico where idconteudoprogramatico="+id;
        connection.query(sql, callback);
    }

    return this;
}