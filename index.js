var express=require("express");
var app= express();

app.use(express.static(__dirname + '/public')); //setting a public folder. __dirname is a node variable that stores a folder in the folder that stores the files

var server = app.listen(3000, function(){

console.log(server.address());
console.log('listening on port 3000');

})

//a callback fnction can be prsed as an arguement parameter, app.listen is setting up a server to listen on a certain port. we are going to add a callback fynction. 