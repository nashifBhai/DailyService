var db = require('./db');

module.exports = {

	getByCustomerId: function(id, callback){
		var sql = "select * from customer where id="+id;
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAllcustomer: function(callback){

		var sql = "select * from customer";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	updateCustomer: function(customer, callback){
		console.log(customer.id);
		var sql = "update customer set username='"+customer.username+"', password='"+customer.password+"' where id="+customer.id;
		console.log(customer.id);
		db.execute(sql, function(status){
			callback(status)
		});
	},
	insertCustomer: function(customer, callback){
		var sql = "insert into customer values ('', '"+customer.username+"','"+customer.password+"')";
		db.execute(sql, function(status){
			callback(status)
		});
	},
	deleteCustomer: function(customer, callback){
		var sql = "delete from customer where id="+customer.id;
		db.execute(sql, function(status){
			callback(status)
		});
	}
	
}