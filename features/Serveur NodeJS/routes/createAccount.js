module.exports = function(app, fs)
{
	app.get("/createAccount", function(req, res, next)
	{
		fs.readFile("./views/newAccount.html", function(err, data)
		{
			res.type("html") ;
			res.send(data.toString()) ;
		}) ;
	}) ;
	
	app.post("/createAccount", function(req, res, next) {

        if(req.body.login && req.body.password)
		{
            var User = models.User ;
            User.create(
			{
                "login" : req.body.login,
				"password" : req.body.password,
				"lastname" : req.body.lastname,
				"firstname" : req.body.firstname,
				"birthdate" : req.body.birthdate,
				"email" : req.body.email,
				"adress" : req.body.adress/*,
				"ip" : ,
				"macAdress" : */
            }).then(function(result)
			{
                res.json(
				{
                    "code": 0,
                    "result": result
                });
				
				res.redirect("/home") ;
				
            }).catch(function(err)
			{
                res.json(
				{
                    "code": 2,
                    "message": "Sequelize error",
                    "error": err
                })
            });
        }
		
		else
		{
			res.json(
			{
                "code": 1,
                "message": "Missing required parameters"
            })
        }
    });
}