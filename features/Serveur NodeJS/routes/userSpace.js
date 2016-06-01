module.exports = function(app, fs)
{
	app.post("/myHome", function(req, res, next)
	{
		fs.readFile("./views/userspace.html", function(err, data)
		{
			res.type("html") ;
			res.send(data.toString()) ;
		}) ;
		
		var User = models.User ;
        var request = {} ;
		
        if(req.body.login)
		{
            request.where =
			{
                "login" :
				{
                    "$like" : req.body.login
                }
				
				"password" :
				{
                    "$like" : req.body.password
                }
            };
        }
		
        Student.find(request).then(function(results)
		{
            res.json(
			{
                "code": 0,
                "result": results
            })
        }).catch(function(err)
		{
            res.json(
			{
                "code": 2,
                "message": "Sequelize error",
                "error": err
            })
        });
    });
}