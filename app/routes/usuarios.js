module.exports = function(app){
	app.post('/usuario/autenticar', function(req, res){
		app.app.controllers.login.usuarioAutenticar(app, req, res);
	});
}