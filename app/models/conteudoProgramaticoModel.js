module.exports = function(){
    this.getConteudoProgramatico = function(connection, callback){
        let sql = 'select * from conteudoprogramatico';
        connection.query(sql, callback);
    }
    // this.getEstudante = function(connection, id, callback){
    //     let sql = 'select * from estudantes where idestudante='+id;
    //     connection.query(sql, callback);
    // }
    this.storeConteudo = function(conteudo, connection, callback){
        connection.query('insert into conteudoprogramatico set ?',conteudo, callback);
    }

    this.deleteConteudo = function(id, connection, callback){
        let sql = "delete from conteudoprogramatico where idconteudoprogramatico="+id;
        connection.query(sql, callback);
    }

    return this;
}