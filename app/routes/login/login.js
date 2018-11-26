module.exports = function(app) {
	app.post('/usuario/salvar', function(req, res) {
		let usuario = req.body;

		req.assert("nome", "Nome é obrigatório").notEmpty();
		req.assert("username", "Usuário é obrigatório").notEmpty();
		req.assert("password", "Senha é obrigatória").notEmpty();

		var erros = req.validationErrors();
		if(erros){
			res.render('login/login', {erros: erros, usuario: usuario});
			return;
		}

        var values = {
            'nome': usuario.nome,
            'username': usuario.username,
            'password': usuario.password
        };

		let connection = app.config.dbConnection();
		let usuariosModel = new app.app.models.usuarioDAO(connection);
		usuariosModel.storeUsuario(values, function(error, result) {
            res.redirect('/perfil');
		});
	});
}   