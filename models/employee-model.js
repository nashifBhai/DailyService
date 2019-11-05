var db = require('./db');

module.exports = {

	getByEmployeeId: function(id, callback){
		var sql = "select * from employee where id="+id;
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAllemployee: function(callback){

		var sql = "select * from employee";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	updateEmp: function(employee, callback){
		console.log(employee.id);
		var sql = "update employee set name='"+employee.name+"', password='"+employee.password+"', salary='"+employee.salary+"',contact='"+employee.contact+"' where id="+employee.id;
		console.log(employee.id);
		db.execute(sql, function(status){
			callback(status)
		});
	},
	insert_emp: function(employee, callback){
		var sql = "insert into employee values ('', '"+employee.name+"','"+employee.password+"', salary='"+employee.salary+"',contact='"+employee.contact+"')";
		db.execute(sql, function(status){
			callback(status)
		});
	},
	delete_emp: function(employee, callback){
		var sql = "delete from employee where id="+employee.id;
		db.execute(sql, function(status){
			callback(status)
		});
	}
	
}