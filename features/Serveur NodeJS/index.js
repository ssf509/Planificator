var express = require("express") ;
var mysql = require("mysql") ;
var fs = require("fs") ;
var bodyParser = require("body-parser") ;


var con = mysql.createConnection(
{
	host : "localhost",
	user : "root",
	password : "",
	port : 3306,
	database : "planificator"
}) ;

con.connect() ;


var app = express() ;


app.use(bodyParser.urlencoded(
{
    "extended" : false
})) ;


require("./routes")(app, fs) ;


app.use(express.static("./public")) ;


app.listen(8888, function()
{
	console.log("Server started port 8888...") ;
}) ;