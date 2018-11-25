module.exports = function (app) {
	app.get('/index', function (req, res) {
		app.app.controllers.index.boardListar(app, req, res);
	});

	app.post('/index/salvarBoard', function (req, res) {
		app.app.controllers.index.boardSalvar(app, req, res);
	});
}
