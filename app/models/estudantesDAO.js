function EstudantesDAO(connection) {
	this._conn = connection;
}

EstudantesDAO.prototype.getEstudantes = function (callback) {
	let sql = 'select * from estudantes';
	this._conn.query(sql, callback);
}

EstudantesDAO.prototype.getEstudante = function (id, callback) {
	let sql = 'select * from estudantes where idestudante=' + id;
	this._conn.query(sql, callback);
}

EstudantesDAO.prototype.storeEstudante = function (estudante, callback) {
	console.log(estudante);
	this._conn.query('insert into estudantes set ?', estudante, callback);
}

module.exports = function(){ 
	return EstudantesDAO;
}