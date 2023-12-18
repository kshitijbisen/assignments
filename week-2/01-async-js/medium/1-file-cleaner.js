const fs=require('fs');

//CallBacks


// fs.readFile('Hello.txt','utf-8',(err,data)=>{
//     console.log(data);
//     data = data.replace(/\s+/g,' ').trim();
//     fs.writeFile('Hello.txt',data,()=>{
//         fs.readFile('Hello.txt','utf-8',(err,data)=>{
//             console.log(data);
//         })
//     }
//     )
// })


//Promises

function readFile(){
    return new Promise((resolve)=>{
        fs.readFile('Hello.txt','utf-8',(err,data)=>{
            console.log(data);
            resolve(removeSpaces(data));
        })
    })
}
function writeFile(data){
    return new Promise((resolve)=>{
        fs.writeFile("Hello.txt",data,()=>{
            resolve();
        })
    })
}
function removeSpaces(data){
    return data.replace(/\s+/g,' ').trim();
}
readFile().then(writeFile).then(readFile).then(()=>{console.log("done")})