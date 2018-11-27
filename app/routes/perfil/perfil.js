module.exports = function (app) {
	app.get('/perfil', function (req, res) {
		if (req.session.autorizado) {
			app.app.controllers.perfil.boardListar(app, req, res);
		}
		else {
			req.send('vai logar');
		}	
	});

	app.get('/perfil/deleteBoard/:ID', function (req, res) {
		if (req.session.autorizado) {
			let id = req.params.ID;
			app.app.controllers.perfil.deleteBoard(id, app, req, res);
		}
		else {
			req.send('vai logar');
		}	
	});
}
