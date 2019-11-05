var express = require('express');
var db		= require.main.require('./models/db');
var router = express.Router();


router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	// if(req.body.type)
	console.log(req.body.type);
	if(req.body.type == 'manager'){
		var sql = "select * from manager where username='"+req.body.username+"' and password='"+req.body.password+"'";
		db.getResult(sql, function(results){
	
			if(results.length > 0){
				req.session.un = req.body.username;
				res.redirect('/home_manager');
			}else{
				res.send('invalid username/password...');
			}
		});
	}
	else if(req.body.type == 'user'){
		var sql = "select * from manager where username='"+req.body.username+"' and password='"+req.body.password+"'";
		db.getResult(sql, function(results){
	
			if(results.length > 0){
				req.session.un = req.body.username;
				res.redirect('/home');
			}else{
				res.send('invalid username/password...');
			}
		});
	}
});


module.exports = router;