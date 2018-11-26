let mysql = require('mysql');

let connMySQL = function () {
	console.log("Iniciada a conexão com o banco");
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'dsw'
    });
}

module.exports = function(){
	return connMySQL;
}

// module.exports = function () {
//     return connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'Bordi1973',
//         database: 'dsw'
//     });
// }