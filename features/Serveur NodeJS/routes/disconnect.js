module.exports = function(app)
{
	app.post("/disconnect", function(req, res, next)
	{
		res.end() ;
	}) ;
}