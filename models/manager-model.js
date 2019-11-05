var db = require('./db');

module.exports = {

	getByManagerId: function(id, callback){
		var sql = "select * from manager where id="+id;
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getManagerAll: function(callback){

		var sql = "select * from manager";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	insertManager: function(manager, callback){
		var sql = "insert into manager values ('', '"+manager.username+"','"+manager.password+"')";
		db.execute(sql, function(status){
			callback(status)
		});
	},
	updateManager: function(manager, callback){
		var sql = "update manager set username='"+manager.username+"', password='"+manager.password+"' where id="+manager.id;
		console.log(manager.id);
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
	deleteManager: function(manager, callback){
		var sql = "delete from manager where id="+manager.id;
		db.execute(sql, function(status){
			callback(status)
		});
	},
	worklist: function(callback){

		var sql = "select * from work_details";
		db.getResult(sql, function(results){
			callback(results);
		});
	}
}