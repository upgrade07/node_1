const http = require('http');

const server = http.createServer(function(req,res){
    
     res.write("<h1>Hey Whats up?</h1>")
     res.write("<h1>Second h1</h1>")
     res.write(JSON.stringify({"name":"sahil"}))
     res.end();

})
server.listen(3000)