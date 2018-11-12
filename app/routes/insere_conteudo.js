module.exports = function (app) {
	app.get('/insere-conteudo', function (req, res) {
		app.app.controllers.conteudo.conteudoInserir(app, req, res);
	});
}