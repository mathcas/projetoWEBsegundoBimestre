module.exports = function(){
    //--------------- METODOS GETS ---------------
    this.getCard = function(id, connection, callback){
        let sql = 'select * from cards where ID =' + id;
        connection.query(sql, callback);
    }

    return this;
}