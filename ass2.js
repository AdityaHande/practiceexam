var exp = require('express');

var app = exp();


app.get('/home',function(req,res){
	res.send("<h1> Welcome to Web App </h1>");
});


app.listen(9000,function(){
	console.log("exp server started at 9000");	
});


