var Sequelize = require("sequelize") ;

module.exports = new Sequelize("Bibliotheque", "root", "", 
{
	pool : false,
	host : "localhost",
	port : 3306
}) ;