module.exports = function (app) {
	app.get('/index', function (req, res) {
		app.app.controllers.index.boardListar(app, req, res);
	});

	app.post('/index/salvarBoard', function (req, res) {
		app.app.controllers.index.storeBoard(app, req, res);
	});

	app.post('/index/storeCard1', function (req, res) {
		app.app.controllers.index.storeCard1(app, req, res);
	});
}
