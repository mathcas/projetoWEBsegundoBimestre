module.exports.estudantesListar = function(app, req, res){
    let connection = app.config.dbConnection();
		let estudantesModel = new app.app.models.estudantesDAO(connection);
		estudantesModel.getEstudantes(function (error, result) {
				if(error) { console.log("Erro")}
				res.render('estudantes/estudantes', {estudantes: result});
		}); 
}