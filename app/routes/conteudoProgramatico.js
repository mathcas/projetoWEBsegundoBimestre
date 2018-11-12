module.exports = function (app) {
	app.get('/conteudoprogramatico', function (req, res) {
		app.app.controllers.conteudo.conteudoListar(app, req, res);
	});
}
