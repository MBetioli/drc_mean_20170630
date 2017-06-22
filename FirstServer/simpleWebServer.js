//vamos criar uma variavel baseada no modulo de http
var http = require("http");

//vamos criar o nosso servidor ( req = requisicao, res = response)
var server = http.createServer(function(req,res) {
	

	//Importar o modulo circle.
	var circle  = require(__dirname +"/module/circle.js");

	//Vamos imprimir os parametros enviados na requisição
	var url = require("url");
	var params = url.parse(req.url, true);
	console.log(params.query);



	if(params.query["r"] != undefined){
		var r = params.query.r;
		console.log("Circunferencia: "+ circle.circumference(r));
		console.log("Area: "+ circle.area(r));
	}
	

	//baseando nos na url podemos indicar um arquivo para ser entregue para quem fez o request
	var fs = require("fs");
	fs.readFile(__dirname + params.pathname, function(err,contentReaded){

		if(err){
			//console.log(err);
			res.writeHead(404, {'Content-Type': 'text/html',
								'Content-Type': 'charset=utf-8'}); 
			res.write("<h1>404 NOT FOUND</h1>");
			res.end();
			return;
		}


		var faker = require("faker");
		var randonName = faker.name.findName();
		var randonImage = faker.internet.avatar();

		//estamos começando a escrever a resposta do meu servidor
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(contentReaded,"utf-8");

		res.write('Your name is: '+ randonName);
		res.write('<img src="'+ randonImage +'">');

		res.end();

	})

});

//starmos o nosso servidor
server.listen(3000, function () {
	console.log("Server STARTED port:3000");
})