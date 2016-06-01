module.exports = function(app, fs)
{
	app.get("/", function(req, res, next)
	{
		fs.readFile("./views/home.html", function(err, data)
		{
			res.type("html") ;
			res.send(data.toString()) ;
		}) ;
	}) ;
} ;