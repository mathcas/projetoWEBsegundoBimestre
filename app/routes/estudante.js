module.exports = function (app) {
	app.get('/estudante', function (req, res) {
		let idEstudante = req.query.idestudante;
		console.log(idEstudante);
		let connection = app.config.dbConnection();
		let estudantesModel = new app.app.models.estudantesDAO(connection);

		estudantesModel.getEstudante(idEstudante, function (error, result) {
			console.log(result);
			res.render('estudante/estudante', {estudante: result});
		}); 
	});
}
