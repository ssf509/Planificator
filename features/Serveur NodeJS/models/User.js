var sequelize = require("./sequelize") ;

module.exports = sequelize.import("User", function(sequelize, Datatypes)
{
	return sequelize.define("User", 
	{
		login : 
		{
			type : Datatypes.STRING,
			primaryKey : true
		},
		password : 
		{
			type : Datatypes.STRING,
			primaryKey : true
		},
		lastname :
		{
			type : Datatypes.STRING
		},
		firstname :
		{
			type : Datatypes.STRING
		},
		birthdate :
		{
			type : Datatypes.DATE
		},
		email :
		{
			type : Datatypes.STRING
		},
		adress :
		{
			type : Datatypes.STRING
		},
		ip :
		{
			type : Datatypes.STRING
		},
		macAdress :
		{
			type : Datatypes.STRING
		}
	},
	{
		paranoid : true,
		freezeTableName : true,
		undescored : true
	}) ;
}) ;