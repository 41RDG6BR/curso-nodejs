var http = require('http')
, fs = require('fs')
, index = fs.readFileSync('index.html')

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    // res.write("<h1>node.js</h1>")
    res.end(index);
}).listen(3000, function(){
    console.log('Servidor rodado do em localhost:3000')
})