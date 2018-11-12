module.exports = function (app) {
	app.post('/conteudo/salvar', function (req, res) {
		app.app.controllers.adminConteudo.conteudoSalvar(app, req, res);
	});

	app.post('/conteudo/deletar', function (req, res) {
		app.app.controllers.adminConteudo.conteudoDeletar(app, req, res);
	});
}