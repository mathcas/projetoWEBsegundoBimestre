module.exports = function (app) {
	app.get('/estudante/inserir', function(req, res){
		app.app.controllers.adminEstudante.estudanteInserir(app, req, res);
	});
	
	app.post('/estudante/salvar', function (req, res) {
		app.app.controllers.adminEstudante.estudanteSalvar(app, req, res);
	});
}