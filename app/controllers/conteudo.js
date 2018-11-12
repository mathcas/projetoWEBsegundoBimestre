module.exports.conteudoInserir = function (app, req, res) {
    let connection = app.config.dbConnection();
    let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;

    conteudoProgramaticoModel.getConteudoProgramatico(connection, function (error, result) {
        if (error) { console.log("Erro"); console.log(error) }
        console.log(result);
        res.render('admin/insere_conteudo', { conteudo: result });
    });
}

module.exports.conteudoListar = function (app, req, res) {
    let connection = app.config.dbConnection();
    let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;

    conteudoProgramaticoModel.getConteudoProgramatico(connection, function (error, result) {
        if (error) { console.log("Erro"); console.log(error) }
        console.log(result);
        res.render('conteudoProgramatico/conteudoProgramatico', { conteudo: result });
    });
}