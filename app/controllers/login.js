module.exports.usuarioAutenticar = function (app, req, res) {
	let usuario = req.body;
	console.log("Controller", usuario);
	req.assert("user", "Usuário é obrigatório").notEmpty();
	req.assert("password", "Password é obrigatório").notEmpty();
	let erros = req.validationErrors();
	if (erros) {
		res.render('home', {erros: erros, usuario: usuario});
		return;
	}
	let connection = app.config.dbConnection();
	let usuariosModel = new app.app.models.usuarioDAO(connection);

	usuariosModel.usuarioAutenticar(usuario, function(error, result){
		if(error) {
			console.log("Erro: ", error);
			console.error("Usuário não autenticado");
			res.redirect('/');
			return;
		}
		if(result.length > 0) {
			req.session.autorizado = true;
			res.redirect('/estudantes');
			return;
		} else {
			res.send("usuário ou password inexistente");
			req.session.autorizado = false;
			//res.render('home', {erros: {}});
		}
		
	});
}
