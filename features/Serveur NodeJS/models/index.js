var sequelize = require("./sequelize") ;
var User = require("./UserUtils") ;

sequelize.sync() ;

module.exports = 
{
	"sequelize" : sequelize,
	"User" : User,
}