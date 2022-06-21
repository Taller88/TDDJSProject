const http = require('http');

const hostname = '127.0.0.1';
const port = "3000"

const server = http.createServer((req, res)=>{

    // 모든  request가 이쪽으로 들어오쥬
    if(req.url=='/'){
        
        res.statusCode=200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello world!');

    }else if(req.url=="/users"){
        
        res.statusCode=200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello users!');
    
    }else{
        res.statusCode=404;
        res.end("Not found: invalid URL")
    }
});

//curl -X GET 'localhost:3000'


// ()=>{} -> ES6 문법
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})