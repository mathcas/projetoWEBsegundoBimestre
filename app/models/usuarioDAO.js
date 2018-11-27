let crypto = require('crypto');

function UsuariosDAO(connection) {
	this._conn = connection;
}

UsuariosDAO.prototype.usuarioAutenticar = function (usuario, callback) {
	
	let senhaCriptografada = crypto.createHash("md5").update(usuario.password).digest("hex");
	usuario.password = senhaCriptografada;
	
	let sql = "select * from users where username ='" + usuario.username + "' and password='" + usuario.password + "'";
	this._conn.query(sql, callback);
}


UsuariosDAO.prototype.storeUsuario = function (usuario, callback) {
	let senhaCriptografada = crypto.createHash("md5").update(usuario.password).digest("hex");
	usuario.password = senhaCriptografada;
	this._conn.query('insert into users set ?', usuario, callback);
}

module.exports = function() {
	return UsuariosDAO;
}