module.exports.usuarioAutenticar = function (app, req, res) {
	let usuario = req.body;

	req.assert("username", "Usuário é obrigatório").notEmpty();
	req.assert("password", "Password é obrigatório").notEmpty();
	let erros = req.validationErrors();
	if (erros) {
		res.send(erros);
		return;
	}
	let connection = app.config.dbConnection();
	let usuariosModel = new app.app.models.usuarioDAO(connection);

	usuariosModel.usuarioAutenticar(usuario, function(error, result){
		if(error) {
			console.log("Erro: ", error);
			console.error("Usuário não autenticado");
			res.redirect('/');
			req.session.autorizado = false;
			return;
		}
		if(result.length > 0) {
			req.session.autorizado = true;
			console.log(result[0]);
			res.cookie('userID', result[0].ID);
			res.redirect('/perfil');
		} else {
			res.send("usuário ou password inexistente");
			req.session.autorizado = false;
		}
		
	});
}
