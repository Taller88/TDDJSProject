const math = require("./math.js");
const fs = require('fs');
// 이러한 시스템을 모듈시스템이라고 함 
const result = math.sum(1,2);
console.log(result);




const dataTxt = fs.readFileSync('./data.txt');
console.log(dataTxt);//<Buffer 54 68 69 73 20 69 73 20 64 61 74 61 2e 74 78 74>
console.log(dataTxt+"");

const dataTxt2 = fs.readFileSync('./data.txt', 'utf8');
console.log(dataTxt2);// This is data.txt


