module.exports = function (app) {

	app.get('/card/:ID', function (req, res) {
		let id = req.params.ID;
		app.app.controllers.card.cardListar(id, app, req, res);
	});
}
