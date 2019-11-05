var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();
var employee = require.main.require('./models/employee-model');
var manager = require.main.require('./models/manager-model');
var customer = require.main.require('./models/customer-model');

router.get('*', function(req, res, next){
	if(req.session.un != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/', function(req, res){
	res.render('home/index');
});
//User, Employee, Manager, Customer List
router.get('/user_list', function(req, res){
	user.getAll(function(results){
		res.render('home/userList', {userList: results});
	});
});

router.get('/employee_list', function(req, res){
	employee.getAllemployee(function(results){
		res.render('home/employeeList', {employeeList: results});
	});
});

router.get('/manager_list', function(req, res){
	manager.getManagerAll(function(results){
		res.render('home/managerList', {managerList: results});
	});
});
router.get('/customer_list', function(req, res){
	customer.getAllcustomer(function(results){
		res.render('home/customerList', {customerList: results});
	});
});
//User, Employee, Manager, Customer List
router.get('/create', function(req, res){
	
		res.render('home/create');
	
});
router.get('/create_employee', function(req, res){
	
		res.render('home/create_employee');
	
});
router.get('/create_manager', function(req, res){
	
		res.render('home/managerCreate');
	
});
router.get('/create_customer', function(req, res){
	
		res.render('home/customerCreate');
	
});


//User, Employee, Manager, Customer edit
router.get('/edit/:id', function(req, res){
	user.getById(req.params.id, function(result){
		res.render('home/edit', {user: result[0]});
	});
});
router.get('/edit-manager/:id', function(req, res){
	manager.getByManagerId(req.params.id, function(result){
		res.render('home/edit-manager', {manager: result[0]});
	});
});

router.get('/edit-employee/:id', function(req, res){
	employee.getByEmployeeId(req.params.id, function(result){
		res.render('home/edit-employee', {employee: result[0]});
	});
});

router.get('/edit-customer/:id', function(req, res){
	customer.getByCustomerId(req.params.id, function(result){
		res.render('home/edit-customer', {customer: result[0]});
	});
});

//User, Employee, Manager, Customer Create Post
router.post('/create', function(req, res){
	console.log('test test');
	var data = {
		username: req.body.username,
		password: req.body.password
	}
	user.insert(data, function(status){
		if(status){
			res.redirect('/home/user_list');
		}else{
			res.redirect('/home/create');
		}
	});

});
router.post('/create_employee', function(req, res){
	console.log('test test');
	var data = {
		name: req.body.name,
		password: req.body.password,
		salary: req.body.salary,
		contact: req.body.contact
	}
	employee.insert_emp(data, function(status){
		if(status){
			res.redirect('/home/employee_list');
		}else{
			res.redirect('/home/create_employee');
		}
	});

});
router.post('/create_manager', function(req, res){
	console.log('test test');
	var data = {
		username: req.body.username,
		password: req.body.password
	}
	manager.insertManager(data, function(status){
		if(status){
			res.redirect('/home/manager_list');
		}else{
			res.redirect('/home/create_manager');
		}
	});

});
router.post('/create_customer', function(req, res){
	console.log('test test.....');
	var data4 = {
		username: req.body.username,
		password: req.body.password,
		
	}
	customer.insertCustomer(data4, function(status){
		if(status){
			res.redirect('/home/customer_list');
		}else{
			res.redirect('/home/create_customer');
		}
	});

});

//User, Employee, Manager, Customer Create Post
router.post('/edit/:id', function(req, res){
	var data = {
		id: req.params.id,
		username: req.body.username,
		password: req.body.password
	}
	user.update(data, function(status){
		if(status){
			res.redirect('/home/user_list');
		}else{
			res.redirect('/home/edit/'+req.params.id);
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
router.post('/edit-manager/:id', function(req, res){
	console.log('test test...');
	var data3 = {
		id: req.params.id,
		username: req.body.username,
		password: req.body.password
	}
	manager.updateManager(data3, function(status){
		if(status){
			res.redirect('/home/manager_list');
		}else{
			res.redirect('/home/edit-manager/'+req.params.id);
		}
    });
});
router.post('/edit-customer/:id', function(req, res){
	var data = {
		id: req.params.id,
		username: req.body.username,
		password: req.body.password
	}
	customer.updateCustomer(data, function(status){
		if(status){
			res.redirect('/home/customer_list');
		}else{
			res.redirect('/home/edit-customer/'+req.params.id);
		}
    });
});		
// User, Employee, Manager, Customer Delete
router.get('/delete/:id', function(req, res){
	console.log('test delete');

	var data = {
		id: req.params.id,
		
	}
	user.delete(data, function(status){
		if(status){
			res.redirect('/home/user_list');
		}
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
router.get('/delete-manager/:id', function(req, res){
	console.log('test delete');

	var data = {
		id: req.params.id,
		
	}
	manager.deleteManager(data, function(status){
		if(status){
			res.redirect('/home/manager_list');
		}
	});
});
router.get('/delete_customer/:id', function(req, res){
	console.log('test delete...');

	var data = {
		id: req.params.id,
		
	}
	customer.deleteCustomer(data, function(status){
		if(status){
			res.redirect('/home/customer_list');
		}
	});
});
router.get('/workListEmployee', function(req, res){
	user.worklist(function(results){
		res.render('home/workListEmployee', {worklist: results});
	});
});
router.get('/user_active_employeeList', function(req, res){
	user.getAllemployee(function(results){
		res.render('home/user_active_employeeList', {employeeList: results});
	});
});
router.get('/user_job_employeeList', function(req, res){
	user.getAllemployee(function(results){
		res.render('home/user_job_employeeList', {employeeList: results});
	});
});
router.get('/hire_job', function(req, res){
	user.hire(function(results){
		res.render('home/hire_job', {employeeList: results});
	});
});

router.get('/myprofile1', function(req, res){
	console.log(req.session.un);
	admin.getByName(req.session.un, function(result){
		
		res.render('home/myprofile1', {admin: result[0]});
	});
});

router.get('/hire', function(req, res){
	customer.hire1(function(results){
		res.render('home/hireList', {userList: results});
	});
});


module.exports = router;
