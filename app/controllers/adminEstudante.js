module.exports.estudanteInserir = function (app, req, res) {
    res.render('admin/insere_estudante', { erros: {}, estudante: {} });
}

module.exports.estudanteSalvar = function (app, req, res) {
    let estudante = req.body;

    req.assert("nome", "Nome é obrigatório").notEmpty();
    req.assert("cidade", "Cidade é obrigatório").notEmpty();
    req.assert("data_nasc", "Data de Nascimento é obrigatório").notEmpty();
    req.assert("nota", "Nota é obrigatório").notEmpty();

    var erros = req.validationErrors();
    if (erros) {
        res.render('admin/insere_estudante', { erros: erros, estudante: estudante });
        return;
    }

    let connection = app.config.dbConnection();
    let estudantesModel = new app.app.models.estudantesDAO(connection);

    estudantesModel.storeEstudante(estudante, function (error, result) {
        if (error) {
            console.log("Erro");
            console.log(error);
        }
        res.redirect('/estudantes');
    });
}