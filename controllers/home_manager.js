var express = require('express');
var manager = require.main.require('./models/manager-model');
var router = express.Router();
var employee = require.main.require('./models/employee-model');
var user = require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.session.un != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/', function(req, res){
	res.render('home/index-manager');
});

router.get('/manager_list', function(req, res){
	manager.getManagerAll(function(results){
		res.render('home_manager/managerList', {managerList: results});
	});
});

router.get('/manager_employeeList', function(req, res){
	manager.getAllemployee(function(results){
		res.render('home/manager_employeeList', {employeeList: results});
	});
});

router.get('/workList', function(req, res){
	manager.worklist(function(results){
		res.render('home/workList', {worklist: results});
	});
});


router.get('/create_employee', function(req, res){
	
		res.render('home/employeeCreate');
	
});

router.get('/edit-employee/:id', function(req, res){
	employee.getByEmployeeId(req.params.id, function(result){
		res.render('home/edit-employee', {employee: result[0]});
	});
});

router.get('/edit-manager/:id', function(req, res){
	manager.getByManagerId(req.params.id, function(result){
		res.render('home/edit-manager', {manager: result[0]});
	});
});




router.get('/delete_emp/:id', function(req, res){
	console.log('test delete');

	var data = {
		id: req.params.id,
		
	}
	employee.delete_emp(data, function(status){
		if(status){
			res.redirect('/home/employee_list');
		}
	});
});


router.post('/edit-employee/:id', function(req, res){
	var data2 = {
		id: req.params.id,
		name: req.body.name,
		password: req.body.password,
		salary: req.body.salary,
		contact: req.body.contact
	}
	employee.updateEmp(data2, function(status){
		if(status){
			res.redirect('/home/employee_list');
		}else{
			res.redirect('/home/edit-employee/'+req.params.id);
		}
	});
});



module.exports = router;
