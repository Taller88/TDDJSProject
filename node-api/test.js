const fs = require('fs');

// readFile(경로, 콜백함수)
// 대표적인 비동기 코드 
const data = fs.readFile('./data.txt','utf8' ,(err, data)=>{
 console.log(data);
})

// 얘 먼저
console.log("먼저?")