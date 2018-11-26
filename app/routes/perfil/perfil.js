module.exports = function (app) {
	app.get('/perfil', function (req, res) {
		app.app.controllers.perfil.boardListar(app, req, res);
	});

	app.post('/perfil/salvarBoard', function (req, res) {
		app.app.controllers.perfil.boardSalvar(app, req, res);
	});
}
