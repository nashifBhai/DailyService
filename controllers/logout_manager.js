var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	
	req.session.un = null;
	res.redirect('/login_manager');
});


module.exports = router;