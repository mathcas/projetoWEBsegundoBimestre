let crypto = require('crypto');

function UsuariosDAO(connection) {
	this._conn = connection;
}

UsuariosDAO.prototype.usuarioAutenticar = function (usuario, callback) {
	
	let senhaCriptografada = crypto.createHash("md5").update(usuario.password).digest("hex");
	usuario.password = senhaCriptografada;

	let sql = "select * from usuario where nome='" + usuario.nome + "' and password='" + usuario.password + "'";
	this._conn.query(sql, callback);
	console.log(this._conn.query(sql, callback));
}


UsuariosDAO.prototype.storeUsuario = function (usuario, callback) {
    console.log(usuario);
	let senhaCriptografada = crypto.createHash("md5").update(usuario.password).digest("hex");
	usuario.password = senhaCriptografada;
	this._conn.query('insert into usuario set ?', usuario, callback);
}

module.exports = function() {
	return UsuariosDAO;
}