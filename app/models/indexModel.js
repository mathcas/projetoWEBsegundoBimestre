module.exports = function(){
    this.getCards = function(connection, callback){
        let sql = 'select * from conteudoprogramatico';
        connection.query(sql, callback);
    }
    // this.getEstudante = function(connection, id, callback){
    //     let sql = 'select * from estudantes where idestudante='+id;
    //     connection.query(sql, callback);
    // }
    this.storeCard = function(conteudo, connection, callback){
        connection.query('insert into conteudoprogramatico set ?',conteudo, callback);
    }

    this.deleteCard = function(id, connection, callback){
        let sql = "delete from conteudoprogramatico where idconteudoprogramatico="+id;
        connection.query(sql, callback);
    }

    return this;
}