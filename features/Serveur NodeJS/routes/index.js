module.exports = function(app, fs)
{
	require("./home")(app, fs) ;
	
	require("./connect")(app, fs) ;
	require("./disconnect")(app) ;
	
	require("./createAccount")(app, fs) ;
	
	require("./userSpace")(app, fs) ;
} ;