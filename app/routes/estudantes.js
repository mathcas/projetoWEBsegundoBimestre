module.exports = function (app) {
	app.get('/estudantes', function (req, res) {
		app.app.controllers.estudantes.estudantesListar(app, req, res);
	});
}
