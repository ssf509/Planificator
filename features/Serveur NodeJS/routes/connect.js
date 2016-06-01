module.exports = function(app, fs)
{
	app.get("/connect", function(req, res, next)
	{
		fs.readFile("./views/connection.html", function(err, data)
		{
			res.type("html") ;
			res.send(data.toString()) ;
		}) ;
	}) ;
}