module.exports.conteudoSalvar = function (app, req, res) {
    let conteudo = req.body;
    let connection = app.config.dbConnection();
    let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;

    conteudoProgramaticoModel.storeConteudo(conteudo, connection, function (error, result) {
        res.redirect('/insere-conteudo');
    });
}

module.exports.conteudoDeletar = function (app, req, res) {
    let idConteudo = req.body.id;
    let connection = app.config.dbConnection();
    let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;
    conteudoProgramaticoModel.deleteConteudo(idConteudo, connection, function (error, result) {
        res.redirect('/insere-conteudo');
    });
}