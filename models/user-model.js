var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from user where id="+id;
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){

		var sql = "select * from user";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into user values ('', '"+user.username+"','"+user.password+"')";
		db.execute(sql, function(status){
			callback(status)
		});
	},
	update: function(user, callback){
		var sql = "update user set username='"+user.username+"', password='"+user.password+"' where id="+user.id;
		console.log(user.id);
		db.execute(sql, function(status){
			callback(status)
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where id="+user.id;
		db.execute(sql, function(status){
			callback(status)
		});
	},
	getAllemployee: function(callback){

		var sql = "select * from employee";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	hire: function(callback){
		var sql = "select * from customer,employee where hire_id=employee.hire_id";
		db.getResult(sql, function(results){
			callback(results)
		});
	},
	getByName: function(username, callback){
		var sql = "select * from user where username='"+username+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	hire1: function(callback){
		var sql = "select customer.id as customerId, employee.id, customer.username, employee.name from customer,employee where customer.hire_id=employee.id";
		db.getResult(sql, function(results){
			callback(results)
		});
	},
	search_userList: function(username,callback){
		var sql = "select * from user where name like % '++'%";
		db.getResult(sql, function(results){
			callback(results)
		});
	},
	worklist: function(callback){

		var sql = "select * from work_details";
		db.getResult(sql, function(results){
			callback(results);
		});
	}
}