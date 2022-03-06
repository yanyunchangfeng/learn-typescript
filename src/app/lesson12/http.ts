export { }
let http = require('http')
// http.createServer(function (req, res){
//     res.end('hello') 
// }) // 语法糖写法
let server = http.createServer();
server.on('request', function(req,res){
    res.end('hellos')
})
http.listen(3000)

