module.exports = function (app) {
	app.get('/index', function (req, res) {
		if (req.session.autorizado) {
			app.app.controllers.index.boardListar(app, req, res);
		}
		else {
			req.send('vai logar');
		}		
	});

	app.post('/index/salvarBoard', function (req, res) {
		if (req.session.autorizado) {
			app.app.controllers.index.storeBoard(app, req, res);
		}
		else {
			req.send('vai logar');
		}	
	});

	app.post('/index/storeCard1', function (req, res) {
		if (req.session.autorizado) {
			app.app.controllers.index.storeCard1(app, req, res);
		}
		else {
			req.send('vai logar');
		}	
	});

	app.post('/index/storeCard2', function (req, res) {
		if (req.session.autorizado) {
			app.app.controllers.index.storeCard2(app, req, res);
		}
		else {
			req.send('vai logar');
		}
	});

	app.post('/index/storeCard3', function (req, res) {
		if (req.session.autorizado) {
			app.app.controllers.index.storeCard3(app, req, res);
		}
		else {
			req.send('vai logar');
		}
	});
}
