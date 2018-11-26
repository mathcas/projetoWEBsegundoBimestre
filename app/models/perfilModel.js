module.exports = function(){

    this.deleteBoard = function(id, connection, callback){
        let sql = "delete from boards where ID = " + id;
        connection.query(sql, callback);
    }

    return this;
}