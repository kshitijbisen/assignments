const fs=require("fs");
fs.readFile("a.txt",'utf-8',(err,data)=>{
console.log(data);})
let element=0;
for (let index = 0; index < 1000000000; index++) {
    element += index;
    
}