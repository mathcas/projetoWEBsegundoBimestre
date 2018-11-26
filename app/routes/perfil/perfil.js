module.exports = function (app) {
	app.get('/perfil', function (req, res) {
		app.app.controllers.perfil.boardListar(app, req, res);
	});

	app.get('/perfil/deleteBoard/:ID', function (req, res) {
		let id = req.params.ID;
		app.app.controllers.perfil.deleteBoard(id, app, req, res);
	});
}
